(function () {
    'use strict';

    var listservice = new ItemsListService();

    angular.module('myApp', [])
        .controller('itemsListController', ItemsListController)
        .factory('itemsListFactory', ItemsListFactory);

    ItemsListController.$inject = ['itemsListFactory'];

    function ItemsListController(ItemsListFactory) {
        var list = this;
        var itemsList = ItemsListFactory();

        list.items = itemsList.getItems();

        list.removeItem = function (item) {
            itemsList.removeItem(item);
        };

        list.hideItem = function (item) {
            itemsList.hideItem(item);
        };
    }

    function ItemsListService() {
        var service = this;

        var items = [
            {
                mark: 'Йогурт №1',
                quantity: 7
            },
            {
                mark: 'Йогурт №2',
                quantity: 1
            },
            {
                mark: 'Йогурт №3',
                quantity: 4
            },
            {
                mark: 'Йогурт №4',
                quantity: 5
            },
            {
                mark: 'Йогурт №5',
                quantity: 7
            },
            {
                mark: 'Йогурт №6',
                quantity: 6
            }
        ];

        service.getItems = function () {
            return items;
        };

        service.hideItem = function (item) {
            items[item].hide = true;
        }

        service.removeItem = function (item) {
            items.splice(item, 1);
        }
    }

    function ItemsListFactory() {
        var factory = function () {
            return listservice;
        };
        return factory;
    }
})();