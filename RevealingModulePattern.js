
function ItemMockup(iId, iName) {
  this.id = iId;
  this.name = iName.trim();
}

const module = (function () {
  let data = [];


  function getArray() {
    return data;
  }

  function addItem(iItem) {
    data.push(iItem);
  }

  function getItemCopy(iId) {
    var toRet = data.find(item => {
      return item.id === iId;
    });

    return { ...toRet };
  }

  function updateItem(iId, iName) {
    data.find(elem => elem.id == iId).name = iName;
  }

  function deleteItem(iId) {
    data = data.filter(elem => elem.id != iId);
  }

  return {
    AddItem: addItem,
    GetItemCopy: getItemCopy,
    UpdateItem: updateItem,
    DeleteItem: deleteItem,
    GetArray: getArray
  }
})();

module.AddItem(new ItemMockup(1, 'A'));
module.AddItem(new ItemMockup(2, 'B'));
module.AddItem(new ItemMockup(3, 'C'));
module.AddItem(new ItemMockup(4, 'D'));
module.AddItem(new ItemMockup(5, 'E'));
