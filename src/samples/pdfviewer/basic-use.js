export class ejPDFViewer {
currentPageNumber = 1;
TotalPage = 0;
pdf;
isTextFieldInFocus = false;
toolbarInView = false;
mousePosX; mousePosY; heigth; width;

constructor() {
}
documentLoad() {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  _ejPdfViewer.showToolbar(false);
  this.height = parseInt(document.getElementById('pdfviewer').style.height, 10);
  this.width = window.innerWidth;
  this.showCustomToolbar();
  setInterval(() => this.hideToolbar(), 5000);
  this.TotalPage = _ejPdfViewer.pageCount;
  let filename = (_ejPdfViewer.fileName).split('\\');
  this.pdf = filename[filename.length - 1];
}
pageChange() {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  let curPageNumber = (_ejPdfViewer.currentPageNumber);
  this.changePage(curPageNumber);
  this.updatePageNavigation();
}
changePage(curPageNumber) {
  this.currentPageNumber = curPageNumber;
}
callClientSideMethod(apiName) {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  switch (apiName) {
  case 'print':
    _ejPdfViewer.print();
    break;
  case 'zoomin':
    _ejPdfViewer.zoomIn();
    ($('#viewer-fitpage').data('ejButton')).enable();
    ($('#viewer-fitwidth').data('ejButton')).enable();
    this.updateZoom();
    break;
  case 'zoomout':
    _ejPdfViewer.zoomOut();
    ($('#viewer-fitpage').data('ejButton')).enable();
    ($('#viewer-fitwidth').data('ejButton')).enable();
    this.updateZoom();
    break;
  case 'fitpage':
    _ejPdfViewer.fitToPage();
    ($('#viewer-fitpage').data('ejButton')).disable();
    ($('#viewer-fitwidth').data('ejButton')).enable();
    this.updateZoom();
    break;
  case 'fitwidth':
    _ejPdfViewer.fitToWidth();
    ($('#viewer-fitpage').data('ejButton')).enable();
    ($('#viewer-fitwidth').data('ejButton')).disable();
    this.updateZoom();
    break;
  case 'previous':
    _ejPdfViewer.goToPreviousPage();
    this.updatePageNavigation();
    break;
  case 'next':
    _ejPdfViewer.goToNextPage();
    this.updatePageNavigation();
    break;
  case 'download':
    _ejPdfViewer.download();
    break;
  default:
    break;
  }
}
updateZoom() {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  if (_ejPdfViewer.zoomPercentage === 50) {
    ($('#viewer-zoomout').data('ejButton')).disable();
    ($('#viewer-zoomin').data('ejButton')).enable();
  } else if (_ejPdfViewer.zoomPercentage === 400) {
    ($('#viewer-zoomin').data('ejButton')).disable();
    ($('#viewer-zoomout').data('ejButton')).enable();
  } else {
    ($('#viewer-zoomin').data('ejButton')).enable();
    ($('#viewer-zoomout').data('ejButton')).enable();
  }
}
updatePageNavigation() {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  if (_ejPdfViewer.currentPageNumber === 1 && _ejPdfViewer.currentPageNumber < _ejPdfViewer.pageCount) {
    ($('#viewer-previous').data('ejButton')).disable();
    ($('#viewer-next').data('ejButton')).enable();
  } else if (_ejPdfViewer.currentPageNumber > 1 && _ejPdfViewer.currentPageNumber < _ejPdfViewer.pageCount) {
    ($('#viewer-previous').data('ejButton')).enable();
    ($('#viewer-next').data('ejButton')).enable();
  } else if (_ejPdfViewer.currentPageNumber === _ejPdfViewer.pageCount && _ejPdfViewer.currentPageNumber !== 1) {
    ($('#viewer-previous').data('ejButton')).enable();
    ($('#viewer-next').data('ejButton')).disable();
  } else {
    ($('#viewer-previous').data('ejButton')).disable();
    ($('#viewer-next').data('ejButton')).disable();
  }
}
mousemovefunction(event) {
  let offset = $('#pdfviewer').offset();
  this.mousePosX = event.pageX - offset.left;
  this.mousePosY = event.pageY - offset.top;
  if (!this.toolbarInView) {
    if ((this.mousePosY < this.height / 8 || this.mousePosX < this.width / 8)) {
      this.showCustomToolbar();
    }
  }
}
showCustomToolbar() {
  $('#magnificationDiv').css({ 'left': '0', 'position': 'absolute', 'display': 'block', 'height': 300 + 'px', 'top': (this.height - 350) + 'px' }).animate({ 'left': 120 + 'px', 'z-index': '10', 'display': 'block' }, 'slow');
  $('#toolbarDiv').css({ 'left': '10', width: '91.2%', 'border': 'transparent', 'top': 0 + 'px', 'position': 'absolute', 'display': 'block' }).animate({ 'height': 56 + 'px', top: 87, 'border': 'transparent', width: '91.2%', 'z-index': '10', 'display': 'block' }, 'slow');
  this.toolbarInView = true;
  this.updatePageNavigation();
}
hideToolbar() {
  if (!((this.mousePosY < this.height / 8 || this.mousePosX < this.width / 8))) {
    if ((this.toolbarInView) && (!this.isTextFieldInFocus)) {
      this.hideCustomToolbar();
    }
  }
}
hideCustomToolbar() {
  $('#toolbarDiv').css({ height: 56 + 'px', 'display': 'none' }).animate({ 'top': 0 + 'px', 'z-index': '-1000', 'display': 'none' }, 'slow');
  $('#magnificationDiv').css({ left: 0 + 'px', 'display': 'none' }).animate({ 'left': 0 + 'px', 'z-index': '-1000', 'display': 'none' }, 'slow');
  this.toolbarInView = false;
}
showTooltip(event) {
  let $divTooltip = ej.buildTag('div.e-pdfviewer-tbdiv e-pdfviewer-tooltip', '', { 'display': 'none' }, { 'id': 'toolTip' });
  let $tooltipContent = ej.buildTag('span.e-pdfviewer-contentspan', '', { 'display': 'block' }, { 'id': 'toolTip_Content' });
  $divTooltip.append($tooltipContent);
  $('body').append($divTooltip);
  if ($('#toolTip').css('display') === 'none') {
    this.showTooltipContent(event);
  }
}
showTooltipContent(event) {
  let currentToolbarItem = document.getElementById(event.target.id);
  let TooltipPos;
  let toolTipText;
  let disabledItem = $(currentToolbarItem).prev();
  if ($(currentToolbarItem).hasClass('e-pdfviewer-print')) {
    TooltipPos = $('#toolbarDiv .e-pdfviewer-print')[0].getBoundingClientRect();
    toolTipText = 'Print';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-gotonext')) || ($(disabledItem).hasClass('e-pdfviewer-gotonext'))) {
    TooltipPos = $('#toolbarDiv .e-pdfviewer-gotonext')[0].getBoundingClientRect();
    toolTipText = 'Next';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-gotoprevious')) || ($(disabledItem).hasClass('e-pdfviewer-gotoprevious'))) {
    TooltipPos = $('#toolbarDiv .e-pdfviewer-gotoprevious')[0].getBoundingClientRect();
    toolTipText = 'Previous';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-zoomin')) || ($(disabledItem).hasClass('e-pdfviewer-zoomin'))) {
    TooltipPos = $('#magnificationDiv  .e-pdfviewer-zoomin')[0].getBoundingClientRect();
    toolTipText = 'Zoom-In';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-zoomout')) || ($(disabledItem).hasClass('e-pdfviewer-zoomout'))) {
    TooltipPos = $('#magnificationDiv .e-pdfviewer-zoomout')[0].getBoundingClientRect();
    toolTipText = 'Zoom-Out';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-fitpage')) || ($(disabledItem).hasClass('e-pdfviewer-fitpage'))) {
    TooltipPos = $('#magnificationDiv .e-pdfviewer-fitpage')[0].getBoundingClientRect();
    toolTipText = 'Fit to Page';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-fitwidth')) || ($(disabledItem).hasClass('e-pdfviewer-fitwidth'))) {
    TooltipPos = $('#magnificationDiv .e-pdfviewer-fitwidth')[0].getBoundingClientRect();
    toolTipText = 'Fit to Width';
  } else if (($(currentToolbarItem).hasClass('e-pdfviewer-download')) || ($(disabledItem).hasClass('e-pdfviewer-download'))) {
    TooltipPos = $('#toolbarDiv .e-pdfviewer-download')[0].getBoundingClientRect();
    toolTipText = 'Download PDF document';
  }

  $('#toolTip_Content').html(toolTipText);
  $('#toolTip').css({ 'top': (TooltipPos.top + TooltipPos.height) + 5, 'left': (TooltipPos.left + (TooltipPos.width / 2)), 'display': 'block', 'position': 'fixed' });
}
hideTooltip() {
  $('#toolTip').remove();
}
textboxOnclick() {
  $('#currentPage').select();
}
goToPage(event) {
  let _ejPdfViewer = $('#pdfviewer').data('ejPdfViewer');
  if (event.which === 13) {
    if (this.currentPageNumber > 0 && this.currentPageNumber <= _ejPdfViewer.pageCount) {
      _ejPdfViewer.goToPage(this.currentPageNumber);
    } else {
      this.currentPageNumber = _ejPdfViewer.currentPageNumber;
    }
  }
}
keyPressValidation(event) {
  if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
    event.preventDefault();
  } else {
    this.goToPage(event);
    return true;
  }
}
focusIn() {
  this.isTextFieldInFocus = true;
}
focusOut() {
  this.isTextFieldInFocus = false;
}
}
