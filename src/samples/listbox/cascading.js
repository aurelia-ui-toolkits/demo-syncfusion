export class BasicUse {
  constructor() {
     // declaration
    this.fields = { value: 'parentId' };
    this.width = '220px';
    this.height = '180px';
    this.groups = [
          { parentId: 'a', text: 'Group A' },
          { parentId: 'b', text: 'Group B' },
          { parentId: 'c', text: 'Group C' },
          { parentId: 'd', text: 'Group D' },
          { parentId: 'e', text: 'Group E' },
            { parentId: 'f', text: 'Group F' },
            { parentId: 'g', text: 'Group G' },
            { parentId: 'h', text: 'Group H' },
            { parentId: 'i', text: 'Group I' },
            { parentId: 'j', text: 'Group J' } ];
            //first level child
    this.countries = [{ value: 11, parentId: 'a', text: 'Algeria', sprite: 'flag-dz' },
           { value: 12, parentId: 'a', text: 'Armenia', sprite: 'flag-am' },
           { value: 13, parentId: 'a', text: 'Bangladesh', sprite: 'flag-bd' },
           { value: 14, parentId: 'a', text: 'Cuba', sprite: 'flag-cu' },
           { value: 15, parentId: 'b', text: 'Denmark', sprite: 'flag-dk' },
           { value: 16, parentId: 'b', text: 'Egypt', sprite: 'flag-eg' },
           { value: 17, parentId: 'c', text: 'Finland', sprite: 'flag-fi' },
           { value: 18, parentId: 'c', text: 'India', sprite: 'flag-in' },
           { value: 19, parentId: 'c', text: 'Malaysia', sprite: 'flag-my' },
           { value: 20, parentId: 'd', text: 'New Zealand', sprite: 'flag-nz' },
           { value: 21, parentId: 'd', text: 'Norway', sprite: 'flag-no' },
           { value: 22, parentId: 'd', text: 'Poland', sprite: 'flag-pl' },
           { value: 23, parentId: 'e', text: 'Romania', sprite: 'flag-ro' },
           { value: 24, parentId: 'e', text: 'Singapore', sprite: 'flag-sg' },
           { value: 25, parentId: 'e', text: 'Thailand', sprite: 'flag-th' },
           { value: 26, parentId: 'e', text: 'Ukraine', sprite: 'flag-ua' },
            { value: 27, parentId: 'f', text: 'Falkland Islands', sprite: 'flag-ua' },
            { value: 28, parentId: 'f', text: 'Faroe Islands', sprite: 'flag-ua' },
            { value: 29, parentId: 'f', text: 'Fiji', sprite: 'flag-ua' },
            { value: 30, parentId: 'g', text: 'Germany', sprite: 'flag-ua' },
            { value: 31, parentId: 'g', text: 'Greece', sprite: 'flag-ua' },
            { value: 32, parentId: 'g', text: 'Greenland', sprite: 'flag-ua' },
            { value: 33, parentId: 'g', text: 'Ghana', sprite: 'flag-ua' },
            { value: 34, parentId: 'h', text: 'Hong Kong', sprite: 'flag-ua' },
            { value: 35, parentId: 'h', text: 'Haiti', sprite: 'flag-ua' },
            { value: 36, parentId: 'i', text: 'Iceland', sprite: 'flag-ua' },
            { value: 37, parentId: 'i', text: 'Indonesia', sprite: 'flag-ua' },
            { value: 38, parentId: 'i', text: 'Ireland', sprite: 'flag-ua' },
            { value: 39, parentId: 'j', text: 'Jamaica', sprite: 'flag-ua' },
            { value: 40, parentId: 'j', text: 'Japan', sprite: 'flag-ua' },
            { value: 41, parentId: 'j', text: 'Jordan', sprite: 'flag-ua' }];
  }
}
