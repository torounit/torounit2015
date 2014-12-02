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

        @$target.on "webkitTransitionEnd transitionEnd", @transitionEnd

    transitionEnd: =>
        console.log "end"
        @$target.height("")

    open: ->
        @$target.addClass("is-open")
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
