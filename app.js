
let listData = function(data){
    this.item = ko.observable(data);
}

let ViewModel = function() {
    let self = this;

    self.listItems = ko.observableArray([]);

    self.itemToAdd = ko.observable("");

    self.addToList = function(){
        let item = self.itemToAdd();
        self.listItems.push(new listData(item));
    }
}

ko.applyBindings(new ViewModel());