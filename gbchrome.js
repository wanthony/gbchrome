var api_key = '6d51f7c748ff46014d46e04da8fa0ac1d3061dc8';

$.get(
    'http://api.giantbomb.com/character/248/',
    {'api_key': api_key, 'format': 'json'},
    function(data) {
        var result = data['result'];
        
        $('#resp').text(data.toString());
    }
);
