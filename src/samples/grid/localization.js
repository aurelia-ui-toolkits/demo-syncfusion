import '../scripts/jsondata.js';
export class Localization {
    constructor() {
      this.OrdersList = window.gridData;
      ej.Grid.Locale['de-DE'] = {
        EmptyRecord: 'Keine Aufzeichnungen angezeigt',
        GroupDropArea: 'Ziehen Sie eine Spaltenüberschrift hier',
        DeleteOperationAlert: 'Keine Einträge für Löschvorgang ausgewählt',
        EditOperationAlert: 'Keine Einträge für Bearbeiten Betrieb ausgewählt',
        SaveButton: 'Speichern',
        CancelButton: 'stornieren',
        EditFormTitle: 'Korrektur von',
        GroupCaptionFormat: '{{:field}}: {{:key}} - {{:count}} {{if count == 1}}Beiträge{{else}}Beiträges{{/if}}',
        UnGroup: 'Klicken Sie hier, um die Gruppierung aufheben'
      };
      ej.Pager.Locale['de-DE'] = {
        pagerInfo: '{0} von {1} Seiten ({2} Beiträge)',
        firstPageTooltip: 'Zur ersten Seite',
        lastPageTooltip: 'Zur letzten Seite',
        nextPageTooltip: 'Zur nächsten Seite',
        previousPageTooltip: 'Zurück zur letzten Seite',
        nextPagerTooltip: 'Zum nächsten Pager',
        previousPagerTooltip: 'Zum vorherigen Pager'
      };
      this.page  = { pageCount: 5 };
      this.group = { enableDropAreaAnimation: false };
      this.decimal = { decimalPlaces: 2 };
    }
}

