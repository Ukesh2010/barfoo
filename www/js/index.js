document.addEventListener('deviceready', function () {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        backgroundColor: "#2d2d2d",
        parent: "game",
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    const BASE_PATH = "https://yukamo.de/wp-content/uploads/2020/09/";
    function preload() {
        this.load.image("game-board", BASE_PATH + "game-board.png");
    }

    function create() {
        this.add.image(400, 300, 'game-board');
    }
});