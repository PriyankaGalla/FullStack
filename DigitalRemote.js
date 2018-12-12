var digitalRemote = {

                    enter : true,
                    channel : 0,
                    state : "off",
                    volume : 0,
                    switchState : function(){
                        alert("Switch ON ??")
                        if(this.state == "off"){
                            this.state = "on";
                            document.getElementById("power").innerHTML = "Power Off"; 
                        }
                        else{
                            this.state = "off";
                            document.getElementById("power").innerHTML = "Power On"; 
                        }
                        console.log(this.state);
                    },
                    channelUp : function(input){
                              
                                    if(this.state == "off"){
                                        alert("Please switch on the TV first to navigate through channels");
                                        return;
                                    }
                                    if(this.channel>=10){
                                        alert("No more channels above this");
                                        return;
                                    }
                                   this.channel++;
                                   console.log(this.channel);
                    },
                    channelDown : function(input){
                        if(this.state == "off"){
                            alert("Please switch on the TV first to navigate through channels");
                            return;
                        }
                        if(this.channel<0){
                            alert("No more channels below this");
                            return;
                        }
                       this.channel--;
                       console.log(this.channel);
                    },
                    volumeUp : function(input){
                        if(this.state == "off"){
                            alert("Please switch on the TV first to increase the volume");
                            return;
                        }
                        if(this.volume>=100){
                            alert("No more channels below this");
                            return;
                        }
                       this.volume++;
                       console.log(this.channel);
                    },
                    volumeDown : function(input){
                        if(this.state == "off"){
                            alert("Please switch on the TV first to decrease the volume");
                            return;
                        }
                        if(this.volume<0){
                            alert("No more channels below this");
                            return;
                        }
                       this.volume--;
                       console.log(this.channel);
                    },

}