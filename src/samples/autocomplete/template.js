export class BasicUse {
  constructor() {
    this.width = '100%';
    this.template = '<div class="flag ${sprite}"> </div><div class="txt"> ${text} </div>';
    this.countries = [
                { text: 'Algeria', sprite: 'flag-dz' }, { text: 'Argentina', sprite: 'flag-ar' },
                { text: 'Armenia', sprite: 'flag-am' }, { text: 'Brazil', sprite: 'flag-br' },
                { text: 'Bangladesh', sprite: 'flag-bd' }, { text: 'Canada', sprite: 'flag-ca' },
                { text: 'Cuba', sprite: 'flag-cu' }, { text: 'China', sprite: 'flag-cn' },
                { text: 'Denmark', sprite: 'flag-dk' }, { text: 'Estonia', sprite: 'flag-ee' },
                { text: 'Egypt', sprite: 'flag-eg' }, { text: 'France', sprite: 'flag-fr' },
                { text: 'Finland', sprite: 'flag-fi' }, { text: 'Greenland', sprite: 'flag-gl' },
                { text: 'India', sprite: 'flag-in' }, { text: 'Indonesia', sprite: 'flag-id' },
                { text: 'Malaysia', sprite: 'flag-my' }, { text: 'Mexico', sprite: 'flag-mx' },
                { text: 'New Zealand', sprite: 'flag-nz' }, { text: 'Netherlands', sprite: 'flag-nl' },
                { text: 'Norway', sprite: 'flag-no' }, { text: 'Portugal', sprite: 'flag-pt' },
                { text: 'Poland', sprite: 'flag-pl' }, { text: 'Qatar', sprite: 'flag-qa' },
                { text: 'Romania', sprite: 'flag-ro' }, { text: 'Spain', sprite: 'flag-es' },
                { text: 'Singapore', sprite: 'flag-sg' }, { text: 'Saudi Arabia', sprite: 'flag-sa' },
                { text: 'Thailand', sprite: 'flag-th' }, { text: 'Turkey', sprite: 'flag-tr' },
                { text: 'Ukraine', sprite: 'flag-ua' }, { text: 'United States', sprite: 'flag-us' },
                { text: 'Uruguay', sprite: 'flag-uy' }, { text: 'Viet Nam', sprite: 'flag-vn' },
                { text: 'Yemen', sprite: 'flag-ye' }
    ];
  }

}
