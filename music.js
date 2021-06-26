
    var length=document.querySelectorAll(".play_btn").length;
    for(var i=0;i<length;i++){
        var play_song=document.querySelectorAll(".play_btn")[i].addEventListener("click",playSong);
        var play_song=document.querySelectorAll(".play_btn")[i].addEventListener("dblclick",pauseSong);

    }

    var song1=new Audio();
    song1.src="music/Peaches.mp3";
    var song2=new Audio();
    song2.src="music/Willow.mp3";
    var song3=new Audio();
    song3.src="music/Who.mp3";
    var song4=new Audio();
    song4.src="music/Love.mp3";
    var song5=new Audio();
    song5.src="music/Bad.mp3";
    var song6=new Audio();
    song6.src="music/Channa.mp3";
    var song7=new Audio();
    song7.src="music/Tere.mp3";
    var song8=new Audio();
    song8.src="music/Kho.mp3";
    var song9=new Audio();
    song9.src="music/Tera.mp3";
    var song10=new Audio();
    song10.src="music/Raabta.mp3";
    var song11=new Audio();
    song11.src="music/Brown.mp3";
    var song12=new Audio();
    song12.src="music/Gabru.mp3";
    var song13=new Audio();
    song13.src="music/High.mp3";
    var song14=new Audio();
    song14.src="music/Daaru.mp3";
    var song15=new Audio();
    song15.src="music/Dope.mp3";

    function playSong(){
        var songId = this.className;
        var newSongId= songId.slice(9)
        console.log(newSongId)
        switch(newSongId){
            case "Peaches":
                song1.play();
                break;
            case "Willow":
                    song2.play();
                    break;
            case "Who":
                song3.play();
                break;
            case "Love":
                song4.play();
                break;    
            case "Bad":
                song5.play();
                break;
            case "Channa":
                song6.play();
                break;
            case "Tere":
                song7.play();
                break;
            case "Kho":
                song8.play();
                break;
            case "Tera":
                    song9.play();
                    break;
            case "Raabta":
                        song10.play();
                        break;
            case "Brown":
                    song11.play();
                    break;
            case "Gabru":
                    song12.play();
                    break;
            case "High":
                    song13.play();
                    break;
            case "Daaru":
                    song14.play();
                    break;
            case "Dope":
                    song15.play();
                    break;
            

        }
        

    }

    function pauseSong(){
        var songId = this.className;
        var newSongId= songId.slice(9)
        console.log(newSongId)
        switch(newSongId){
            case "Peaches":
                song1.pause();
                break;
            case "Willow":
                    song2.pause();
                    break;
            case "Who":
                song3.pause();
                break;
            case "Love":
                song4.pause();
                break;    
            case "Bad":
                song5.pause();
                break;
            case "Channa":
                song6.pause();
                break;
            case "Tere":
                song7.pause();
                break;
            case "Kho":
                song8.pause();
                break;
            case "Tera":
                    song9.pause();
                    break;
            case "Raabta":
                        song10.pause();
                        break;
            case "Brown":
                    song11.pause();
                    break;
            case "Gabru":
                    song12.pause();
                    break;
            case "High":
                    song13.pause();
                    break;
            case "Daaru":
                    song14.pause();
                    break;
            case "Dope":
                    song15.pause();
                    break;
            

        }
    }