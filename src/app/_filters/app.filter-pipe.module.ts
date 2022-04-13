import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  CamelToHumanPipe, DaysHoursSecondsPipe, BytesConvertFilterPipe, EpochToDateFilterPipe, StrToMacPipe, SafePipe, ArrayOrderByPipe,
  FormatTrafficUnitsPipe, DateAgoPipe, FormatCellPipe, UniqueFilterPipe, ArrayToStrPipe, TimeFormat, DateFormat, DateAndTimeFormat,
  CveToDateFilterPipe, MacFilterPipe, AssessmentDateFilterPipe, SplitPipe, FilterPipe, LinkifyPipe, ArrayToStrEllipsisPipe, SearchPipe,
  SafeHTMLPipe, TimeAgoPipe, ArraySortPipe, EllipsisPipe, ShortNumberPipe, UtcToLocale, FileNameFilterPipe, MaskPasswordFilterPipe,
  ArrayToObjWithEllipsisPipe
} from './app.filter.pipe';

@NgModule({
  declarations: [
    CamelToHumanPipe,
    DaysHoursSecondsPipe,
    BytesConvertFilterPipe,
    EpochToDateFilterPipe,
    StrToMacPipe,
    SafePipe, MacFilterPipe, ArrayOrderByPipe, AssessmentDateFilterPipe, SplitPipe, ArrayToStrEllipsisPipe, SearchPipe,
    FormatTrafficUnitsPipe, SafeHTMLPipe, TimeAgoPipe, ArraySortPipe, EllipsisPipe, ShortNumberPipe, UtcToLocale,
    FileNameFilterPipe, MaskPasswordFilterPipe, ArrayToObjWithEllipsisPipe,
    DateAgoPipe,
    FormatCellPipe,
    UniqueFilterPipe,
    ArrayToStrPipe,
    TimeFormat,
    DateFormat,
    DateAndTimeFormat,
    CveToDateFilterPipe, FilterPipe, LinkifyPipe
  ],
  imports: [CommonModule],
    exports: [
        CamelToHumanPipe,
        DaysHoursSecondsPipe,
        BytesConvertFilterPipe,
        EpochToDateFilterPipe,
        StrToMacPipe,
        SafePipe, MacFilterPipe, ArrayOrderByPipe, AssessmentDateFilterPipe, SplitPipe, ArrayToStrEllipsisPipe, SearchPipe,
        FormatTrafficUnitsPipe, SafeHTMLPipe, TimeAgoPipe, ArraySortPipe,
        FileNameFilterPipe, MaskPasswordFilterPipe, ArrayToObjWithEllipsisPipe,
        DateAgoPipe,
        FormatCellPipe,
        UniqueFilterPipe,
        ArrayToStrPipe,
        TimeFormat,
        DateFormat,
        DateAndTimeFormat,
        CveToDateFilterPipe,
        FilterPipe, LinkifyPipe, EllipsisPipe, ShortNumberPipe, UtcToLocale
    ],
  providers: [DatePipe, FilterPipe, DateAgoPipe, BytesConvertFilterPipe, ArrayOrderByPipe, SearchPipe]
})
export class AppFilterPipeModule {
}
