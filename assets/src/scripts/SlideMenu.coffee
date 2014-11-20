$ = require 'jquery'
module.exports = class SlideMenu

    constructor: ($el)->
        @$el = $el
        @$target = $ @$el.data("slidemenu-target")
        @$target.hide()
        @on()

    on: ->
        @$el.click (event) =>
            event.preventDefault()
            @$target.slideToggle(200)


    @init: ()->
        $("[data-slidemenu-target]").each () ->
            new SlideMenu $(@)
