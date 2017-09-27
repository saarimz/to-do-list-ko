
//model object
let listData = function(data,time){
    this.item = ko.observable(data);
    this.timestamp = ko.observable(time);
}
//VM
let ViewModel = function() {
    let self = this;

    self.listItems = ko.observableArray([]);

    self.itemToAdd = ko.observable("");

    self.addToList = function(){
        let item = self.itemToAdd();
        let currentTime = (new Date(Date.now())).toLocaleDateString();
        self.listItems.push(new listData(item,currentTime));
        self.itemToAdd("");
    }

    self.clearList = function() {
        self.listItems.removeAll();
    }

    self.hasItem = ko.computed(function(){
        return (self.itemToAdd());
    })

    self.isNotEmpty = ko.computed(function(){
        return (self.listItems().length);
    })

    self.removeItem = function(item){
        self.listItems.remove(item);
    }
}

//ko apply bindings
ko.applyBindings(new ViewModel());


