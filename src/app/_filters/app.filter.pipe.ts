import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';
import linkifyStr from 'linkifyjs/string';
import {orderBy} from 'lodash';

@Pipe({
  name: 'shortNumber'
})

export class ShortNumberPipe implements PipeTransform {

  transform(num: number, args?: any): any {
    if (isNaN(num)) {
      return num;
    } // will only work value is a number
    if (num === null) {
      return num;
    }
    if (num === 0) {
      return num;
    }
    let abs = Math.abs(num);
    const rounder = Math.pow(10, 1);
    const isNegative = num < 0; // will also work for Negative numbers
    let key = '';

    const powers = [
      {key: 'Q', value: Math.pow(10, 15)},
      {key: 'T', value: Math.pow(10, 12)},
      {key: 'B', value: Math.pow(10, 9)},
      {key: 'M', value: Math.pow(10, 6)},
      {key: 'K', value: 1000}
    ];

    for (const item of powers) {
      let reduced = abs / item.value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = item.key;
        break;
      }
    }
    return (isNegative ? '-' : '') + abs + key;
  }
}

@Pipe({
  name: 'sortBy',
  pure: true
})
/*
 *ngFor="let c of oneDimArray | sortBy:'asc'"
 *ngFor="let c of arrayOfObjects | sortBy:'asc':'propertyName'"
*/
export class ArraySortPipe implements PipeTransform {
  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    } // sort 1d array
    // @ts-ignore
    return orderBy(value, [column], [order]);
  }
}

@Pipe({
  name: 'fileNameFilter',
  pure: true
})
export class FileNameFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) { return value; }
    return value.split('\\').pop().split('/').pop().split('.')[0];
  }
}

@Pipe({
  name: 'filterUnique',
  pure: true
})
export class UniqueFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value != null) {
      const uniqueArray = value.filter((el: any, index: any, array: any) => {
        return array.indexOf(el) === index;
      });
      return uniqueArray;
    }
  }
}

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || value === '') {
      return '-';
    }
    let content = '';
    const year = Math.floor(value / ((365 * 24) * 3600));
    value = value % ((365 * 24) * 3600);
    if (year > 0) {
      content += year + 'y ';
    }
    const day = Math.floor(value / (24 * 3600));
    value = value % (24 * 3600);
    if (day > 0) {
      content += day + 'd ';
    }
    const hour = Math.floor(value / 3600);
    value %= 3600;
    if (hour > 0) {
      content += hour + 'h ';
    }
    const minutes = Math.floor(value / 60);
    value %= 60;
    if (minutes > 0 && !args) {
      content += minutes + 'm ';
    }
    const seconds = Math.floor(value);
    if (seconds > 0 && !args) {
      content += seconds + 's ';
    }
    return content;
  }
}

@Pipe({name: 'utcToLocale'})
export class UtcToLocale implements PipeTransform {
  transform(date: string): string {
    if (date === null || !date || date === '') { return date; }
    if (date && date.indexOf('Z') === -1) { date += 'Z'; }
    return date ? new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString() : date;
  }
}

@Pipe({name: 'linkify'})
export class LinkifyPipe implements PipeTransform {
  transform(str: string): string {
    return str ? linkifyStr(str, {target: '_system'}) : str;
  }
}


@Pipe({name: 'formatCell'})
export class FormatCellPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(value: any, format: string): any {
    if (value === undefined) {
      return '';
    }
    if (format === 'date') {
      return this.datePipe.transform(value, 'medium');
    } else if (format === 'cameltohuman') {
      return new CamelToHumanPipe().transform(value, true);
    } else if (format === 'bytesconvert') {
      return new BytesConvertFilterPipe().transform(value, 0);
    } else if (format === 'epochToDate') {
      return new EpochToDateFilterPipe().transform(value);
    } else if (format === 'utcToLocale') {
      return new UtcToLocale().transform(value);
    } else if (format === 'DD-MMM-YYYY') {
      return new DDMMMYYYY().transform(value);
    }else if (format === 'dateFormat') {
      return new DateFormat().transform(value);
    }else if (format === 'cveToDate') {
      return new CveToDateFilterPipe().transform(value);
    } else if (format === 'dateAgo') {
      return new DateAgoPipe().transform(value);
    } else if (format === 'assessmentDate') {
      return new AssessmentDateFilterPipe().transform(value);
    } else if (format === 'formatTrafficUnits') {
      return new FormatTrafficUnitsPipe().transform(value);
    } else if (format === 'macFilter') {
      return new MacFilterPipe().transform(value);
    } else if (format.indexOf('arrayToObjWithEllipsis') > -1) {
      const prms = format.split(':');
      const param = {key: prms[1], ellipse: prms[2]};
      return new ArrayToObjWithEllipsisPipe().transform(value, prms[1]);
    } else if (format === 'arrayToStr') {
      return new ArrayToStrPipe().transform(value);
    } else if (format === 'arrayToStrWithEllipsis') {
      return new ArrayToStrEllipsisPipe().transform(value);
    } else if (format === 'daysHoursSeconds') {
      return new DaysHoursSecondsPipe().transform(value);
    } else if (format === 'timeAgo') {
      return new TimeAgoPipe().transform(value);
    } else if (format.indexOf('ellipsis') > -1) {
      const prms = format.split(':');
      return new EllipsisPipe().transform(value, prms[1]);
    } else if (format.indexOf('fileNameFilter') > -1) {
      return new FileNameFilterPipe().transform(value);
    } else if (format.indexOf('maskpassword') > -1) {
      return new MaskPasswordFilterPipe().transform(value);
    }
    return value;
  }
}

@Pipe({name: 'timeAgo'})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) { return value; }
    const d = (value.length === 10) ? new Date(value * 1000) : new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return 'A few seconds ago';
    } else if (seconds <= 90) {
      return 'A minute ago';
    } else if (minutes <= 45) {
      return minutes + ' minutes ago';
    } else if (minutes <= 90) {
      return 'An hour ago';
    } else if (hours <= 22) {
      return hours + ' hours ago';
    } else if (hours <= 36) {
      return 'A day ago';
    } else if (days <= 25) {
      return days + ' days ago';
    } else if (days <= 45) {
      return 'A month ago';
    } else if (days <= 345) {
      return months + ' months ago';
    } else if (days <= 545) {
      return 'A year ago';
    } else { // (days > 545)
      return years + ' years ago';
    }
  }

  private getSecondsUntilUpdate(seconds: number): number {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }
}

@Pipe({
  name: 'macFilter'
})
export class MacFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || value === '') {
      return '';
    }
    return value.match(/.{1,2}/g).join(':');
  }
}

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'orderBy'
})
export class ArrayOrderByPipe {
  private static parseExpression(expression: string): string[] {
    expression = expression.replace(/\[(\w+)\]/g, '.$1');
    expression = expression.replace(/^\./, '');
    return expression.split('.');
  }

  private static getValue(object: any, expression: string[]): any {
    for (let i = 0, n = expression.length; i < n; ++i) {
      const k = expression[i];
      if (!object || !(k in object)) {
        return;
      }
      object = object[k];
    }
    return object;
  }

  private static setValue(object: any, value: any, expression: string[]): any {
    let i;
    for (i = 0; i < expression.length - 1; i++) {
      object = object[expression[i]];
    }
    object[expression[i]] = value;
  }

  transform(value: any | any[], expression?: any, reverse?: boolean): any {
    if (!value) {
      return value;
    }
    const isArray = value instanceof Array;

    if (isArray) {
      return this.sortArray(value, expression, reverse);
    }

    if (typeof value === 'object') {
      return this.transformObject(value, expression, reverse);
    }

    return value;
  }

  private sortArray(value: any[], expression?: any, reverse?: boolean): any[] {
    const isDeepLink = expression && expression.indexOf('.') !== -1;

    if (isDeepLink) {
      expression = ArrayOrderByPipe.parseExpression(expression);
    }

    const array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        return a > b ? 1 : -1;
      }

      if (!isDeepLink) {
        return a[expression] > b[expression] ? 1 : -1;
      }

      return ArrayOrderByPipe.getValue(a, expression) > ArrayOrderByPipe.getValue(b, expression) ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }


  private transformObject(value: any | any[], expression?: any, reverse?: boolean): any {
    const parsedExpression = ArrayOrderByPipe.parseExpression(expression);
    let lastPredicate: any = parsedExpression.pop();
    let oldValue = ArrayOrderByPipe.getValue(value, parsedExpression);

    if (!(oldValue instanceof Array)) {
      if (lastPredicate !== null) {
        parsedExpression.push(lastPredicate);
      }
      lastPredicate = null;
      oldValue = ArrayOrderByPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    const newValue = this.transform(oldValue, lastPredicate, reverse);
    ArrayOrderByPipe.setValue(value, newValue, parsedExpression);
    return value;
  }
}

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Pipe({name: 'safeHTML'})
export class SafeHTMLPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }
}

@Pipe({
  name: 'camelToHuman'
})
export class CamelToHumanPipe implements PipeTransform {
  transform(input: any, uppercaseFirst: any): any {
    if (typeof input !== 'string') {
      return input;
    }
    let result = input.replace(/([a-z\d])([A-Z])/g, '$1' + (' ' || '_') + '$2');
    if (result.indexOf('_') > -1) {
      result = result.replace(/(?:_| |\b)(\w)/g,
        (key, p1) => p1.toUpperCase()).replace(/([a-z])([A-Z])/g, '$1 $2');
    }
    if (uppercaseFirst) {
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }
    return result;
  }
}

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }
    args = args.toLowerCase();
    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}

@Pipe({
  name: 'formatTrafficUnits'
})
export class FormatTrafficUnitsPipe implements PipeTransform {
  transform(units: any, decimals?: any, display?: any, base?: any): any {
    if (!units) {
      return '';
    }
    if (display === undefined) {
      display = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps'];
    }
    if (units === 0) {
      return units + display[0];
    }
    base = base || 1000; // or 1024 for binary
    const dm = decimals || 2;
    const i = Math.floor(Math.log(units) / Math.log(base));
    return parseFloat((units / Math.pow(base, i)).toFixed(dm)) + display[i];
  }
}

@Pipe({
  name: 'arrayToStrWithEllipsis'
})
export class ArrayToStrEllipsisPipe implements PipeTransform {
  transform(input: any, args?: any): any {
    if (!(input && input !== '')) {
      return '';
    }
    if (input.length < 3) {
      return input.join(', ');
    } else if (input.length > 2) {
      return input[0] + ', ' + input[1] + ', ...';
    } else {
      return '';
    }
  }
}

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe {
  transform(val: any, args?: any): any {
    if (!val) { return val; }
    args = (!args) ? 25 : args;
    if (typeof val === 'object' && val.length && val.length !== undefined) {
      val = val.join(', ');
    } else if (typeof val === 'object' && val.length === undefined) {
      val = JSON.stringify(val).replace('{', '')
        .replace('}', '')
        .replace(/\\/g, '');
    } else {
      val = val + '';
    }
    if (val.length > args) {
      return val.substring(0, args) + '...';
    } else {
      return val;
    }
  }
}

@Pipe({
  name: 'arrayToObjWithEllipsis'
})
export class ArrayToObjWithEllipsisPipe implements PipeTransform {
  transform(input: any, args?: any): any {
    if (!input || input === null || input === '') {
      return '';
    }
    const retData: any = [];
    if (input && input.length) {
      input.forEach((obj: any) => {
        retData.push(obj[args]);
      });
    }
    if (retData && retData.length) {
      return retData.join(', ');
    } else {
      return '';
    }
  }
}

@Pipe({
  name: 'arrayToStr'
})
export class ArrayToStrPipe implements PipeTransform {
  transform(input: any, args?: any): any {
    if (!input || input === null || input === '') {
      return '';
    }
    if (input.length > 0) {
      return input.join(', ');
    } else {
      return '';
    }
  }
}

@Pipe({
  name: 'strToMac'
})
export class StrToMacPipe implements PipeTransform {
  transform(input: any, uppercase: any): any {
    if (!input || input === null || input === '') {
      return '';
    }
    if (uppercase) {
      input = input.toUpperCase();
    }
    if (input.length >= 3 && input.length <= 16) {
      input = input.replace(/\W/ig, '');
      input = input.replace(/(.{2})/g, '$1:');
      return input;
    } else {
      return '';
    }
  }
}

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordFilterPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '-';
    }
    return '***********';
  }
}

@Pipe({
  name: 'cveToDate'
})
export class CveToDateFilterPipe implements PipeTransform {
  transform(epoch: any): any {
    if (!epoch) {
      return '-';
    }
    epoch = epoch + '';
    const year = epoch.slice(0, 4);
    const month = epoch.slice(4, 6);
    const date = epoch.slice(6, 8);
    return year + '/' + month + '/' + date;
  }
}

@Pipe({
  name: 'assessmentDate'
})
export class AssessmentDateFilterPipe implements PipeTransform {
  transform(epoch: any): any {
    if (!epoch) {
      return '-';
    }
    const ret: string[] = [];
    if (epoch.length > 0) {
      epoch.forEach((dt: string | number | Date) => {
        dt = dt + '';
        dt = dt.split('.')[0];
        // @ts-ignore
        const d: any = (dt.toString().length === 10) ? new Date(dt * 1000) : new Date(dt);
        ret.push(d.toLocaleDateString() + ' ' + d.toLocaleTimeString());
      });
    }
    return ret.join(', ');
  }
}

@Pipe({name: 'split'})
export class SplitPipe implements PipeTransform {
  transform(input: any, separator: string = ' ', limit: number = 0): any {
    if (typeof input === 'string') {
      return input.split(separator)[limit];
    }
    return input;
  }
}

@Pipe({
  name: 'epochToDate'
})
export class EpochToDateFilterPipe implements PipeTransform {
  transform(epoch: any): any {
    if (!epoch) {
      return '-';
    }
    epoch = (epoch + '').split('.')[0];
    const d = (epoch.toString().length === 10) ? new Date(epoch * 1000) : new Date(+epoch);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }
}

@Pipe({
  name: 'bytesConvert'
})
export class BytesConvertFilterPipe implements PipeTransform {
  transform(bytes: any, decimals: number = 2): any {
    if (bytes === 0 || !bytes || bytes === '' || bytes === null) {
      return '0';
    } else if (typeof bytes === 'string') {
      bytes = Number(bytes);
    }
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let unit = 0;
    while (bytes >= 1024) {
      bytes /= 1024;
      unit++;
    }
    return bytes.toFixed(+decimals) + ' ' + units[unit];
  }
}

@Pipe({
  name: 'daysHoursSeconds'
})
export class DaysHoursSecondsPipe implements PipeTransform {
  transform(sec: any, args?: any): any {
    if (!sec) {
      return sec;
    } else {
      let t = Math.floor(sec / 100);
      // tslint:disable-next-line:prefer-const
      let years;
      // tslint:disable-next-line:prefer-const
      let months;
      let days;
      if (t > 86400) {
        days = Math.floor(t / 86400);
        t = t - (days * 86400);
      }
      const hours = Math.floor(t / 3600);
      t = t - (hours * 3600);
      const minutes = Math.floor(t / 60);
      t = t - (minutes * 60);
      let content = '';
      if (years) {
        content += years + ' years';
      }
      if (months) {
        if (content) {
          content += ', ';
        }
        content += months + ' months';
      }
      if (days) {
        if (content) {
          content += ', ';
        }
        content += days + ' days';
      }
      if (hours || days) {
        if (content) {
          content += ', ';
        }
        content += hours + ' hours';
      }
      if (content) {
        content += ', ';
      }
      content += minutes + ' minutes and ' + t + ' seconds.';
      return content;
    }
  }
}

@Pipe({
  name: 'timeFormat'
})
export class TimeFormat implements PipeTransform {
  transform(time: any, args?: any): any {
    let content = '';
    if (time !== '') {
      content = time.Hour + 'h :' + time.Minute + 'm :' + time.Second + 's';
      return content;
    }
    return content;

  }
}

@Pipe({
  name: 'dateFormat'
})
export class DateFormat implements PipeTransform {
  transform(date: any, args?: any): any {
    let content = '';
    if (date !== '') {
      content = date.Year + '-' + date.Month + '-' + date.Day;
      return content;
    }
    return content;

  }
}

@Pipe({
  name: 'dateAndTimeFormat'
})
export class DateAndTimeFormat implements PipeTransform {
  transform(dateAndTime: any, args?: any): any {
    let date = '-';
    let time = '-';
    if (dateAndTime !== '') {
      date = dateAndTime.Date.Year + '-' + dateAndTime.Date.Month + '-' + dateAndTime.Date.Day;
      time = dateAndTime.Time.Hour + 'h :' + dateAndTime.Time.Minute + 'm :' + dateAndTime.Time.Second + 's';
      return date + ' ' + time;
    }
    return date + ' ' + time;

  }
}

@Pipe({
  name: 'DD-MMM-YYYY'
})
export class DDMMMYYYY implements PipeTransform {
  transform(date: any, args?: any): any {
    function join(t: any, a: any, s: any) {
      function format(m: any) {
         let f = new Intl.DateTimeFormat('en', m);
         return f.format(t);
      }
      return a.map(format).join(s);
   }
   let a = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
   let s = join(new Date(date), a, '-');
   return s;
  }
}