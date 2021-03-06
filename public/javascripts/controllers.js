'use strict';

/* Controllers */
function InitialController() {
}
InitialController.$inject = [];

function AboutController() {
}
AboutController.$inject = [];

function ContactController() {
}
ContactController.$inject = [];

function TreeMakerController($scope) {

    $('<ul>' +
        '<li>Root' +
            '<ul>' +
                '<li>One</li>' +
                '<li>Two' +
                    '<ul>' +
                        '<li>Two One</li>' +
                        '<li>Two Two</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>' +
        '</li>' +
    '</ul>').jOrgChart({chartElement: $("#exampleTree")});

    var tree = {}, node = {};

        //Accepts either a JSON object or a <ul> and parses it into a <ul> or a JSON object respectively.
    var nodeJSONParser = function (node, dataFormat) {
            if(dataFormat === "HTML") {

            } else if (dataFormat === "JSON") {

            }
        },
        treeJSONParser = function (tree, dataFormat) {
            if(dataFormat === "HTML") {

            } else if (dataFormat === "JSON") {

            }
        },
        createTree = function (treeName) {
            var newTree = {
                "node": {
                    "name": treeName,
                    "links": [],
                    "desc": null,
                    "parent": null,
                    "children": [],
                    "treeName": treeName
                }
            };
            return newTree;
        },
        createNode = function (name, links, desc, parent, children, treeName) {

        },
        //Accepts a UL, turns it into a tree, and attaches it to the DOM.
        attachTree = function (tree, elementToAppendTo) {
            $(tree).jOrgChart({chartElement: $(elementToAppendTo)})
        };

    $("#startTreeButton").on("click", function () {
        console.log("Creating Tree...");
        var newTree = createTree($("#treeNameTextBox").val()),
            newTreeUL = $("<ul>" +
                            "<li class="+newTree.node.treeName+">" +
                                newTree.node.treeName +
                            "</li>" +
                        "</ul>");
        attachTree(newTreeUL, $("#newTree"));
//        attachTree(treeJSONParser(newTree, "HTML"), $("#newTree"));
        $(this.parentElement).css("display", "none");

        $.ajax({
            type: "GET",
            url: "https://mhacks-epicskilltree.rhcloud.com/treecontrol/addnode.json?treename=" + newTree.node.treeName +
                "&description=" + newTree.node.desc,
//            treecontrol/addnode.json?treename=rod&name=wtf&parent=rod&link=www.abc.com&description=wtf
            done: function (response) {
                alert(response);
            }
        });
    });
    $(document).on("click", ".node", function (e) {
        var event = e;
        $("#nodePopup").bPopup({
            onOpen: function () {
                //Load node values
                console.log($(event.target));
            },
            onClose: function () {
                //Clear input values
                console.log($(event.target));
            }
        })
    });
}
TreeMakerController.$inject = [];