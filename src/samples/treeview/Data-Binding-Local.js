export class LocalData {
    constructor() {
      this.localData = [
        { id: 1, name: 'Discover Music', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Hot Singles' },
        { id: 3, pid: 1, name: 'Rising Artists' },
        { id: 4, pid: 1, name: 'Live Music' },
        { id: 6, pid: 1, name: 'Best of 2013 So Far' },
        { id: 7, name: 'Sales and Events', hasChild: true, expanded: true },
        { id: 8, pid: 7, name: '100 Albums - $5 Each' },
        { id: 9, pid: 7, name: 'Hip-Hop and R&B Sale' },
        { id: 10, pid: 7, name: 'CD Deals' },
        { id: 11, name: 'Categories', hasChild: true },
        { id: 12, pid: 11, name: 'Songs' },
        { id: 13, pid: 11, name: 'Bestselling Albums' },
        { id: 14, pid: 11, name: 'New Releases' },
        { id: 15, pid: 11, name: 'Bestselling Songs' },
        { id: 16, name: 'MP3 Albums', hasChild: true },
        { id: 17, pid: 16, name: 'Rock' },
        { id: 18, pid: 16, name: 'Gospel' },
        { id: 19, pid: 16, name: 'Latin Music' },
        { id: 20, pid: 16, name: 'Jazz' },
        { id: 21, name: 'More in Music', hasChild: true },
        { id: 22, pid: 21, name: 'Music Trade-In' },
        { id: 23, pid: 21, name: 'Redeem a Gift Card' },
        { id: 24, pid: 21, name: 'Band T-Shirts' },
        { id: 25, pid: 21, name: 'Mobile MVC' }];
      this.fieldData = { id: 'id', parentId: 'pid', text: 'name', hasChild: 'hasChild', dataSource: this.localData, expanded: 'expanded' };
    }
}
