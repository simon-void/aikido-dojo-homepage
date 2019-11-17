(function() {
    'use strict'
    window.addEventListener('load', function() {

        var $form = $("#contact-form")
        if($form.length) {
            $form.submit(function(event) {
                event.preventDefault()
                var valueByNameMap = getValueByNameMap($form)
                submitMap(valueByNameMap)
            })
        }

        setStateIsSendingMessage(false)

    }, false)
})()

function getValueByNameMap($form) {

    var nameValueMap = new Map()
    $form.find("input").each(function() {
        var $input = $(this)
        var value = $input.val();
        var name = $input.attr('name');
        nameValueMap[name] = value
    })

    $form.find("textarea").each(function() {
        var $input = $(this)
        var value = $input.val();
        var name = $input.attr('name');
        nameValueMap[name] = value
    })
    
    return nameValueMap
}

function submitMap(nameValueMap) {
    //console.log("submitting map: "+JSON.stringify(nameValueMap))

    var postreq2mailUrl = "https://2snqm0sfhh.execute-api.eu-west-1.amazonaws.com/live/postreq2mail"
    
    var xhr = new XMLHttpRequest()
    xhr.open('POST', postreq2mailUrl, true)
    xhr.onreadystatechange = function(event) {
        if(xhr.readyState === 4) {
            setStateIsSendingMessage(false)

            var responseStatus = xhr.status
            if(responseStatus===200) {
                var response = JSON.parse(event.target.response)
                var wasSuccessful = response.wasSuccessful
                var errorMessage = response.errorMessage
                
                displaySentContactMsgResult(wasSuccessful, errorMessage)
            }else{
                displaySentContactMsgResult(false, "resposeStatus: " + responseStatus)
            }
        }
    }

    setStateIsSendingMessage(true)
    xhr.send(new Blob([JSON.stringify(nameValueMap, null, 2)], {type : 'application/json'}))
    // setTimeout(function(){
    //     setStateIsSendingMessage(false)
    // }, 1000)
}

function displaySentContactMsgResult(wasSuccessful, errorMessage) {
    var $alertDivParent = $("#contactAlertParent")
    // clear old alerts
    $alertDivParent.empty()
    // append msg
    if(wasSuccessful===true) {
        console.log("success")
        $alertDivParent.append(
            '<div class="alert alert-success alert-dismissible fade show">'+
                '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
                '<strong>Message sent!</strong>'+
            '</div>'
        )
    }else{
        console.log("failure: "+ errorMessage)
        $alertDivParent.append(
            '<div class="alert alert-danger alert-dismissible fade show">'+
                '<button type="button" class="close" data-dismiss="alert">&times;</button>'+
                '<strong>Message could not be sent!</strong> reason: '+
                errorMessage +
            '</div>'
        )
    }
}

function setStateIsSendingMessage(isSending) {
    var $sendButton = $("#contactButtonId")
    var $textInputs = $( ".form-control" )
    
    if($sendButton.length) {
        //remove the children
        $sendButton.empty()
        if(isSending===true) {
            $sendButton.addClass("disabled")
            $textInputs.each(function() {$(this).prop( "disabled", true );})
            $sendButton.append('<span class="spinner-border spinner-border-sm"/> Sending...')
        } else {
            $sendButton.removeClass("disabled")
            $textInputs.each(function() {$(this).prop( "disabled", false );})
            $sendButton.append('Send')
        }
    }
}