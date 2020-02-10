(function() {
'use strict';

angular.module('appModule2', [])
    .controller('ShoppingListCheckOffController1', ShoppingListCheckOffController1)
    .factory('ShoppingListCheckOffFactory', ShoppingListCheckOffFactory)

    // Controller
    ShoppingListCheckOffController1.$inject = ['ShoppingListCheckOffFactory'];
    function ShoppingListCheckOffController1(ShoppingListCheckOffFactory) {
        var lists = this;
        
        var shoppingListToBuyToBought = ShoppingListCheckOffFactory();

        // create obj item list with both items
        lists.items =  {
            toBuy: shoppingListToBuyToBought.getItems(),
            alreadyBought: shoppingListToBuyToBought.getBoughtItems()
        }

        lists.removeItem = function (itemIndex) {
            shoppingListToBuyToBought.addItem(itemIndex);
            shoppingListToBuyToBought.removeItem(itemIndex);
        };

    }

    function ShoppingListService() {
        var service = this;
    
        // List of shopping items to buy
        var items = [{
            "name": "Pickled",
            "quantity": 40
          }, {
            "name": "Osso",
            "quantity": 27
          }, {
            "name": "Pecan",
            "quantity": 34
          }, {
            "name": "Pistachio",
            "quantity": 34
          }, {
            "name": "Wine",
            "quantity": 38
          }, {
            "name": "Bagelers",
            "quantity": 7
          }, {
            "name": "Juice",
            "quantity": 36
        }];
        
        // List of shopping items that bought
        var boughtItems = [];

        service.addItem = function (itemIndex) {
            if ((items !== undefined) || (items.length !== 0 )) {
                boughtItems.push(items[itemIndex])
            }
        };
    
        service.removeItem = function (itemIndex) {
            if (itemIndex > -1 && itemIndex !== items.length) {
                items.splice(itemIndex, 1);
            }
        };
    
        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };
    }


    function ShoppingListCheckOffFactory() {
        var factory = function () {
          return new ShoppingListService();
        };
        return factory;
    }
  
})();