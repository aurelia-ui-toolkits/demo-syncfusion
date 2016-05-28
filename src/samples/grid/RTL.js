import '../scripts/jsondata.js';
export class Rtl {
    constructor() {
      this.OrdersList = window.gridData;
      ej.Grid.Locale['ar-AE'] = {
        EmptyRecord: 'لا توجد سجلات للعرض',
        GroupDropArea: 'اسحب رأس العمود هنا إلى مجموعة أعمدة لها',
        DeleteOperationAlert: 'لا توجد سجلات اختيارها لعملية الحذف',
        EditOperationAlert: 'لا توجد سجلات اختيارها لعملية تحرير',
        SaveButton: 'حفظ',
        CancelButton: 'إلغاء',
        EditFormTitle: 'تفاصيل',
        FilterbarTitle: 'الصورة خلية شريط تصفية',
        GroupCaptionFormat: '{{:field}}: {{:key}} - {{:count}} {{if count == 1}}ايٽم  {{else}}سلع{{/if}}',
        Add: 'إضافة',
        Edit: 'تحرير',
        Update: 'التحديث',
        Cancel: 'إلغاء',
        Delete: 'حذف',
        UnGroup: 'انقر هنا لفك تجميع'
      };
      ej.Pager.Locale['ar-AE'] = {
        pagerInfo: '{0} من {1} صفحة ({2} سلعة)',
        firstPageTooltip: 'انتقل إلى الصفحة الأولى',
        lastPageTooltip: 'انتقل إلى الصفحة الأخيرة',
        nextPageTooltip: 'انتقل إلى الصفحة التالية',
        previousPageTooltip: 'انتقل إلى الصفحة السابقة',
        nextPagerTooltip: 'الذهاب إلى بيجر المقبل',
        previousPagerTooltip: 'الذهاب إلى بيجر السابقة'
      };
      this.toolbar = {showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] };
      this.edit = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.numeric = ej.Grid.EditingType.Numeric;
      this.decimal = { decimalPlaces: 2 };
    }
}

