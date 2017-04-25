/**
 * Created by FaDu on 4/18/17.
 */

var controller = function($scope) {

    $scope.guesses = 6;

    var getWord = function() {
        var index = Math.floor(Math.random() * words.length);
        return words[index];
    };

    var writeWord = function(word) {
        return _.map(word.split(''), function(character) {
            return { name: character, chosen: false };
        });
    };

    var showWord = function() {
        _.each($scope.actualWord, function(letter) {
            letter.chosen = true;
        });
    };

    var endGame = function() {
        $scope.win = _.reduce($scope.actualWord, function(acc, letter) {
            return acc && letter.chosen;
        }, true);

        if (!$scope.win && $scope.wrongGuess === $scope.guesses) {
            $scope.lost = true;
            showWord();
        }
    }

    $scope.reset = function() {
        _.each($scope.letters, function(letter) {
            letter.chosen = false;
        });
        $scope.actualWord = writeWord(getWord());
        $scope.wrongGuess = 0;
        $scope.win = false;
        $scope.lost = false;
        $scope.head = {
            "visibility" : "hidden"
        }
        $scope.body = {
            "visibility" : "hidden"
        }
        $scope.lhand = {
            "visibility" : "hidden"
        }
        $scope.rhand = {
            "visibility" : "hidden"
        }
        $scope.lleg = {
            "visibility" : "hidden"
        }
        $scope.rleg = {
            "visibility" : "hidden"
        }
    };

    $scope.reset();

    $scope.try = function(guess) {
        guess.chosen = true;
        var found = false;
        _.each($scope.actualWord,
            function(letter) {
                if (guess.name.toUpperCase() === letter.name.toUpperCase()) {
                    letter.chosen = true;
                    found = true;
                }
            });
        if (!found) {
            $scope.wrongGuess++;
            if($scope.wrongGuess == 1)
            {
                $scope.head = {
                    "visibility" : "visible"
                }
            }
            if($scope.wrongGuess == 2){
                $scope.body = {
                    "visibility" : "visible"
                }
            }
            if($scope.wrongGuess == 3){
                $scope.lhand = {
                    "visibility" : "visible"
                }
            }
            if($scope.wrongGuess == 4){
                $scope.rhand = {
                    "visibility" : "visible"
                }
            }
            if($scope.wrongGuess == 5){
                $scope.lleg = {
                    "visibility" : "visible"
                }
            }
            if($scope.wrongGuess == 6){
                $scope.rleg = {
                    "visibility" : "visible"
                }
            }
        }
        endGame();
    };

    $scope.letters = writeWord("abcdefghijklmnopqrstuvwxyz");

};

var words = [
    'Rails', 'AngularJS', 'Bootstrap', 'Ruby', 'JavaScript',
    'authentication', 'function', 'array', 'object', 'sublime',
    'github', 'agile', 'route', 'database', 'model', 'view',
    'controller', 'terminal', 'array', 'data', 'inheritance',
    'Heroku', 'scope',  'closure'
];

