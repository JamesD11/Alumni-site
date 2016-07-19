var app = angular.module('player', []);

// Run

app.run(function() {
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

// Config

app.config(function($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

// Service

app.service('VideosService', ['$window', '$rootScope', '$log', function($window, $rootScope, $log) {

    var service = this;

    var youtube = {
        ready: false,
        player: null,
        playerId: null,
        videoId: null,
        videoTitle: null,
        playerHeight: '450',
        playerWidth: '720',
        state: 'stopped'
    };
    var results = [];

    var history = [
        { id: 'V5J05-7WSSM', title: 'Experiod | Rutgers Coding Bootcamp' }
    ];

    $window.onYouTubeIframeAPIReady = function() {
        $log.info('Youtube API is ready');
        youtube.ready = true;
        service.bindPlayer('placeholder');
        service.loadPlayer();
        $rootScope.$apply();
    };

    function onYoutubeReady(event) {
        $log.info('YouTube Player is ready');
        youtube.player.cueVideoById(history[0].id);
        youtube.videoId = history[0].id;
        youtube.videoTitle = history[0].title;
    }

    function onYoutubeStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            youtube.state = 'playing';
        } else if (event.data == YT.PlayerState.PAUSED) {
            youtube.state = 'paused';
        } else if (event.data == YT.PlayerState.ENDED) {
            youtube.state = 'ended';
            service.launchPlayer(upcoming[0].id, upcoming[0].title);
            service.archiveVideo(upcoming[0].id, upcoming[0].title);
            service.deleteVideo(upcoming, upcoming[0].id);
        }
        $rootScope.$apply();
    }

    this.bindPlayer = function(elementId) {
        $log.info('Binding to ' + elementId);
        youtube.playerId = elementId;
    };

    this.createPlayer = function() {
        $log.info('Creating a new Youtube player for DOM id ' + youtube.playerId + ' and video ' + youtube.videoId);
        return new YT.Player(youtube.playerId, {
            height: youtube.playerHeight,
            width: youtube.playerWidth,
            playerVars: {
                rel: 0,
                showinfo: 0
            },
            events: {
                'onReady': onYoutubeReady,
                'onStateChange': onYoutubeStateChange
            }
        });
    };

    this.loadPlayer = function() {
        if (youtube.ready && youtube.playerId) {
            if (youtube.player) {
                youtube.player.destroy();
            }
            youtube.player = service.createPlayer();
        }
    };

    this.launchPlayer = function(id, title) {
        youtube.player.loadVideoById(id);
        youtube.videoId = id;
        youtube.videoTitle = title;
        return youtube;
    }

    this.listResults = function(data) {
        results.length = 0;
        for (var i = data.items.length - 1; i >= 0; i--) {
            results.push({
                id: data.items[i].id.videoId,
                title: data.items[i].snippet.title,
                description: data.items[i].snippet.description,
                thumbnail: data.items[i].snippet.thumbnails.default.url,
                author: data.items[i].snippet.channelTitle
            });
        }
        return results;
    }

    this.getYoutube = function() {
        return youtube;
    };

    this.getResults = function() {
        return results;
    };

}]);

// Controller

app.controller('VideosController', function($scope, $http, $log, VideosService, $window) {

    init();

    function init() {
        $scope.youtube = VideosService.getYoutube();
        $scope.results = VideosService.getResults();
        $scope.playlist = true;
    }

    $scope.launch = function(id, title) {
        VideosService.launchPlayer(id, title);
        $log.info('Launched id:' + id + ' and title:' + title);
    };

    $scope.search = function() {
        $http.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: 'AIzaSyDQlAn1VwijptiHvx7qaBrWT2Arv0daE10',
                    type: 'video',
                    maxResults: '10',
                    part: 'id,snippet',
                    fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
                    q: "Rutgers Coding Bootcamp"
                }
            })
            .success(function(data) {
                VideosService.listResults(data);
                $log.info(data);
                console.log(data);
            })
            .error(function() {
                $log.info('Search error');
            });
    }

    $scope.tabulate = function(state) {
        $scope.playlist = state;
    }
    $window.onload = function() {
        $scope.search();
    };
});
