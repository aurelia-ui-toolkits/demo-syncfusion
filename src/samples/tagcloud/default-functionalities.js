export class DefaultFunctionalities {
  websiteCollection = [
                    { text: 'Google', url: 'http://www.google.com', frequency: 12 },
                    { text: 'All Things Digital', url: 'http://allthingsd.com/', frequency: 3 },
                    { text: 'Arts Technica', url: 'http://arstechnica.com/', frequency: 8 },
                    { text: 'Business Week', url: 'http://www.businessweek.com/', frequency: 2 },
                    { text: 'Yahoo', url: 'http://in.yahoo.com/', frequency: 12 },
                    { text: 'Center Networks', url: 'http://www.centernetworks.com/', frequency: 5 },
                    { text: 'Crave', url: 'http://news.cnet.com/crave/', frequency: 8 },
                    { text: 'Crunch Gear', url: 'http://techcrunch.com/gadgets/', frequency: 20 },
                    { text: 'Daily Tech', url: 'http://www.dailytech.com/', frequency: 1 },
                    { text: 'Electronista', url: 'http://www.electronista.com/', frequency: 3 },
                    { text: 'Engadget', url: 'http://www.engadget.com/', frequency: 5 },
                    { text: 'Gearlog', url: 'http://www.gearlog.com/', frequency: 9 },
                    { text: 'Information Week', url: 'http://www.informationweek.com/', frequency: 0 },
                    { text: 'PCWorld', url: 'http://www.pcworld.com/', frequency: 11 },
                    { text: 'Tech Republic', url: 'http://techrepublic.com/', frequency: 3 },
                    { text: 'Valleywag', url: 'http://valleywag.gawker.com/', frequency: 6 },
                    { text: 'Rediff', url: 'http://in.rediff.com/', frequency: 9 },
                    { text: 'WebProNews', url: 'http://www.webpronews.com/', frequency: 2 }
  ];

  constructor() {
    this.title = 'Tech Sites';
    this.data = this.websiteCollection;
  }
}
