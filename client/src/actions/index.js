import $ from "jquery-ajax";

export function fetchItems() {
    return function(dispatch) {
        dispatch(requestItems());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("/api/items").done(function(data) {
            dispatch(receiveItems(data));
        });
    };
}

function requestItems() {
    return {
        type: "REQUEST_ITEMS",
    };
}

function receiveItems(items) {
    return {
        type: "RECEIVE_ITEMS",
        items
    };
}

export function addItem(item) {
    return function(dispatch) {
        // Use the POST method and include the contact JSON as the request body.
        $.ajax({
            url: "/api/items/",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(item)
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchItems());
        });
    };
}

export function removeItem(id) {
    return function(dispatch) {
        // Use the DELETE method.
        $.ajax({
            // When building URLs, encodeURIComponent helps keep the URL safe.
            url: "/api/items/" + encodeURIComponent(id),
            method: "DELETE"
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchItems());
        });
    };
}
