/**
 * Vanilla paginate ;) (https://github.com/xylphid)
 * Version 1.0.0
 *
 * @author Anthony PERIQUET
 */
(function(window, document) {
    currentPaginate = null;

    vanilla.paginate = function( query, options ) {
        if (!(this instanceof vanilla.paginate))
            return new vanilla.paginate( query, options );

        currentPaginate = self = this;
        self.options = extend({}, vanilla.paginate.defaults, options);
        self.query = query;
        self.items = vanilla( query );
        self.container = vanilla( query ).parent();

        self.__init__();
    }

    vanilla.paginate.prototype = {
        constructor: vanilla.paginate,

        __init__: function( page ){
            this._clean();
            this._paginate( page );
            this._showNavigation();
        },

        _getPage: function() {
            var page = window.location.hash.substr(1);
            return isNaN(parseInt(page)) ? 0 : parseInt(page) - 1;
        },

        _getPageCount: function() {
            return Math.ceil(this.items.length() / this.options.nbElem);
        },

        _clean: function() {
            this.items.each( function( elm ) {
                elm.remove();
            });
            this.container.children("[data-paginate]").remove();
        },

        _paginate: function( page ) {
            var currentPage = typeof page != 'undefined' ? page : this._getPage(),
                sliceStart = currentPage * this.options.nbElem,
                sliceEnd = sliceStart + this.options.nbElem
                container = this.container;

            // Create vanilla object from slice
            var items = vanilla();
            items.nodes = Array.from( this.items.nodes )
                .slice(sliceStart, sliceEnd);

            // Display items
            items.each( function( elm ) {
                container.append( elm );
            });
        },

        _showNavigation: function() {
            var nbPages = this._getPageCount(),
                currentPage = this._getPage();

            // Create navigation container
            var navigation = vanilla("<div>")
                .addClass(this.options.className)
                .attr("data-paginate", "true");

            // Add pages
            for (var i = 0; i < nbPages; i++) {
                vanilla("<a>")
                    .attr("href", "#" + (i + 1))
                    .html(i + 1)
                    .on("click", function(){
                        var anchor = vanilla(this).attr("href").substr(1);
                        var page = isNaN(parseInt(anchor)) ? 0 : parseInt(anchor) - 1;
                        self.__init__( page );
                    })
                    .appendTo(navigation);
            }

            // Show page count
            vanilla("<div>")
                .addClass(this.options.countClassName)
                .html("Nb pages : " + this._getPageCount())
                .prependTo(navigation);

            // Append to container
            this.container.append(navigation);
        }
    };

    // Paginator default options
    vanilla.paginate.defaults = {
        nbElem: 10,
        className: "paginate",
        countClassName: "total"
    };

    vanilla.prototype.paginate = function(item) {
        if (this instanceof vanilla) {
            currentPaginate = new vanilla.paginate(this, options);
        }
        return this;
    }

    // utils
    var extend = function(out) {
        out = out || {};
        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;
            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }

        return out;
    };
}) (window, document);