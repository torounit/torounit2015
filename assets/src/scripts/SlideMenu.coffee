$ = require 'jquery'
module.exports = class SlideMenu

    constructor: ($el)->
        @$el = $el
        @state = false
        @$target = $ @$el.data("slidemenu-target")
        @on()

    on: ->
        @$el.click (event) =>
            event.preventDefault()
            @state = !@state
            if @state
                @open()
            else
                @close()


    open: ->
        @$target.addClass("is-open")
        @$target.height("")
        height = @$target.height()
        @$target.height(0)
        @$target.height(height)

    close: ->
        height = @$target.height()
        @$target.height(@$target.height())
        @$target.height(0)
        @$target.removeClass("is-open")


    @init: ()->
        $("[data-slidemenu-target]").each () ->
            new SlideMenu $(@)
