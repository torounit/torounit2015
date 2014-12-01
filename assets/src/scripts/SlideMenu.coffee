$ = require 'jquery'
module.exports = class SlideMenu

    constructor: ($el)->
        @$el = $el
        @$target = $ @$el.data("slidemenu-target")
        @$target.height(0)
        @on()

    on: ->
        @$el.click (event) =>
            event.preventDefault()
            @$target.toggleClass("is-open")
            if @$target.hasClass("is-open")
                @open()
            else
                @close()

    open: ->
        @$target.height("")
        height = @$target.height()
        @$target.height(0)
        @$target.height(height)

    close: ->
        @$target.height(0)


    @init: ()->
        $("[data-slidemenu-target]").each () ->
            new SlideMenu $(@)
