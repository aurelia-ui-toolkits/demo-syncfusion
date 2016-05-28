export class LoadOnDemand {
    constructor() {
      this.localData = [
        { id: 1, name: 'Local Disk(C:)', hasChild: true },
        { id: 2, pid: 1, name: 'Folder 1' },
        { id: 3, pid: 1, name: 'Folder 2' },
        { id: 4, pid: 1, name: 'Folder 3', hasChild: true },
        { id: 10, pid: 4, name: 'File 1' },
        { id: 11, pid: 4, name: 'File 2', hasChild: true },
        { id: 12, pid: 11, name: 'File 3' },
        { id: 5, name: 'Local Disk(D:)', hasChild: true },
        { id: 6, pid: 5, name: 'Folder 4', hasChild: true },
        { id: 7, pid: 6, name: 'File 4' },
        { id: 8, pid: 6, name: 'File 5' },
        { id: 9, pid: 6, name: 'File 6' },
        { id: 10, pid: 5, name: 'Folder 5' },
        { id: 11, pid: 5, name: 'Folder 6' },
        { id: 12, name: 'Local Disk(E:)', hasChild: true },
        { id: 13, pid: 12, name: 'Folder 7', hasChild: true },
        { id: 14, pid: 13, name: 'File 7' },
        { id: 15, pid: 13, name: 'File 8' },
        { id: 16, pid: 13, name: 'File 9' },
        { id: 17, pid: 12, name: 'Folder 8' },
        { id: 18, pid: 12, name: 'Folder 9' }];
      this.fieldData = { dataSource: this.localData, id: 'id', parentId: 'pid', text: 'name', hasChild: 'hasChild' };
    }
}
