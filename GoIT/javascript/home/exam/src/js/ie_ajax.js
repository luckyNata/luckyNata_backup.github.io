$.ajaxPrefilter(function (options, originalOptions, jqXhr) {
    if (!window.CorsProxyUrl) {
        window.CorsProxyUrl = '/corsproxy/';
    }
    // only proxy those requests
    // that are marked as crossDomain requests.
    if (!options.crossDomain) {
        return;
    }

    if (getIeVersion() && getIeVersion() < 10) {
        var url = options.url;
        options.beforeSend = function (request) {
            request.setRequestHeader("X-CorsProxy-Url", url);
        };
        options.url = window.CorsProxyUrl;
        options.crossDomain = false;
    }
});