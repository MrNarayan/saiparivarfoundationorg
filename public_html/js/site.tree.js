if (typeof (Site) == 'undefined')
    Site = {
        EventTreeObject : null
    };

Site.Utils = function () {

    var isInitialized = false;

    var createTree = function (treeDiv, data) {
        $.each(data, function (i, item) {
            var $parentCtrl = $("<div id='treeParentDiv'  />");
            $parentCtrl.addClass("tree_header");
            $parentCtrl.data('data-node', item);
            $parentCtrl.data('data-url-path', item.Name);

            treeDiv.append($parentCtrl);
            bindTreeNodeClick($parentCtrl);

            if (item.Nodes != undefined && item.Nodes != null)
            {
                var $ctrl = $("<div id='treeNode'/>");
                createNode($ctrl, item.Nodes, item.Name, 1);

                var $div1 = $("<div/>");

                var imgArrow = new Image();
                imgArrow.id = "imageArrow"
                imgArrow.src = "images/plus1.png";
                $(imgArrow).attr({ 'class': 'imgArrow' });
                $div1.append(imgArrow);

                var $div2 = $("<div/>");
                var span = $("<span/>").text(item.Name);
                span.addClass("nodeHeaderText");
                $div2.append(span);
                $div1.append($div2);

                $parentCtrl.append($div1);
                $parentCtrl.append($ctrl);
                //$ctrl.hide();                
                $ctrl.toggle();
            }
            else {
                var $div1 = $("<div/>");
                $div1.append($("<div/>").text(item.Name));
                $parentCtrl.append($div1);
            }
            Site.IsEventInitialized = $parentCtrl;
        });
    };

    

    var createNode = function (divObj, data, urlPath, depth) {
        $.each(data, function (i, item) {
            var $parentCtrl = $("<div id='treeParentDiv'/>");
            
            $parentCtrl.addClass("tree_header" + depth);
            $parentCtrl.data('data-node', item);

            $parentCtrl.data('data-url-path', urlPath + "/" + item.Name);
            divObj.append($parentCtrl);

            bindTreeNodeClick($parentCtrl);
            //divObj.append($ctrl);

            //bindTreeNodeClick($ctrl);

            if (item.Nodes != undefined && item.Nodes != null) {
                var $ctrl = $("<div id='treeNode'/>");
                createNode($ctrl, item.Nodes, urlPath + "/" + item.Name, depth + 1);

                var $div1 = $("<div/>");

                var imgArrow = new Image();
                imgArrow.id = "imageArrow"
                imgArrow.src = "images/plus1.png";
                $(imgArrow).attr({ 'class': 'imgArrow' });
                $div1.append(imgArrow);

                var $div2 = $("<div/>");
                var span = $("<span/>").text(item.Name);
                span.addClass("nodeHeaderText");
                $div2.append(span);
                $div1.append($div2);

                $parentCtrl.append($div1);
                $parentCtrl.append($ctrl);
                $ctrl.hide();
                
            }
            else {
                
                
                var $div1 = $("<div/>");
                $div1.append($("<div/>").text(item.Name));
                $parentCtrl.append($div1);
                
                
            }
        });
    };

    var bindTreeNodeClick = function (div) {


        $(div).bind('click', function () {

            var element = $(this);


            var node = element.data("data-node");
            var urlPath = element.data("data-url-path");

            if (node.Nodes != undefined && node.Nodes != null) {
                //element.toggle();

                var img = $(element).find("img").first()[0];

                if ($(img).attr("src").indexOf("plus1.png") >= 0)
                {
                    $(img).attr("src", "images/minus1.png");
                }
                else
                {
                    $(img).attr("src", "images/plus1.png");
                }
                
                $(element).find("div[id='treeNode']").each(function () {

                    $(this).toggle();
                    return false;
                });

            }
            else {
                // Load all images
                
                if (node.Images != undefined && node.Images != null) {

                    var divPhotos = $('#eventPhotos');
                    divPhotos.empty();

                    $.each(node.Images, function (i, item) {
                        var $ctrl = $("<div id='eventPhoto'/>");
                        //$ctrl.addClass("tree_header");

                        var imgFake = new Image();
                        imgFake.src = "EventImages/" + urlPath + "/" + item.Name;
                        $(imgFake).attr({ 'class': 'imgphoto' });
                        $ctrl.append(imgFake);

                        //$ctrl.after($(imgFake).attr({ 'class': 'imgFake', 'width': 200, 'height': 200 }));

                        divPhotos.append($ctrl);
                    });
                }
                else if (node.IdName != undefined && node.IdName != null) {

                    var divPhotos = $('#eventPhotos');
                    //divPhotos.empty();

                    divPhotos.find("div[class='resourceDiv']").each(function () {
                        if ($(this).attr("id") == node.IdName)
                        {
                            $(this).show();
                        }
                        else {
                            $(this).hide();
                        }
                        
                    });

                }
            }

            return false;

            //var treeParentNode = $(this);

            
            

            
        });
    };

    var clickTopChildNode = function (div) {

        var element = getChildToClick($(div)); //.closest('.tree_header:first');

        if (element!= "undefined" || element.length != 0)
            element.children().first().click();
    };

    var getChildToClick = function (div) {
        var element = $(div);
        var topElement = null;

        var treeNode = element.find("div[id='treeNode']").first();

        if (treeNode.length != 0)
        {
            if (!treeNode.is(':visible')) {
                $(treeNode).click();
            }

            topElement = getChildToClick(treeNode);
        }
        else
        {
            topElement = element;
        }

        return topElement;
    };

    return {
        CreateTree: function (treeDiv, data) {

            if (Site.EventTreeObject == null)
                createTree(treeDiv, data);
            else
            {

            }

            clickTopChildNode(treeDiv);
        }

    };
}();

$(document).ready(function () {
    //OrderCenter.Utils.BindAjax();
});                                                                                                                                                                                                                            