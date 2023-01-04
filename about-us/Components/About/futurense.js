function showDetails(a){
    // document.getElementById("talent-problem-details").style.visibility = "visible";
    document.getElementById("talent-problem-details").style.opacity = 1;

    if(a==1){
        data ='<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Being charged hefty amounts for upskilling without any employment guarantee? Argh! We feel you.</div></div></li><li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">If you are juggling between working as a professional and upskilling, do remember that they never go hand in hand. Can’t leave your job as you have bills to pay?</div></div></li>';
    }
    if(a==2){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Got a degree but not the right job in hand? It’s the lack of industrial exposure during college. The country has many engineers but barely any Industry-ready engineers.</div></div></li><li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Technology is booming, rendering the definition of industry-relevant skills evolving rapid</div></div></li>';
    }
    if(a==3){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Stuck in a loop of backend (boring) jobs because of campus placements?</div></div></li><li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Can’t see growth in your career? Many companies limit your opportunities for advancement by not allowing you to upskill from your current skill set.</div></div></li>'
    }
    if(a==4){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Got talent but no doors to knock on? Don’t know the right people in the right places?</div></div></li><li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Don’t have a big brand like a town, school, or college to get your foot in the door?</div></div></li>'
    }
    document.getElementById("client-problem").style.display = "none";
    document.getElementById("talent-problem-details").innerHTML = data; 
    document.getElementById("talent-problem-details").style.marginLeft = '25%';
    document.getElementById("hand-img").style.marginLeft = "25%";
}
function showDetails1(a){
    document.getElementById("client-problem-details").style.opacity = 1;
    if(a==1){
        data ='<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Talent with the right skills is high in demand, but quality supply is limited. New Supply needs to be created!!</div></div></li>';
    }
    if(a==2){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Talent output is delayed as a result of notice period and training processes.</div></div></li>';
    }
    if(a==3){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Since the market offers only generic talents, it is extremely challenging for businesses to acquire talent with specific skills related to domain and tool stack.</div></div></li>'
    }
    if(a==4){
        data = '<li><div class="row value"><div class="col-1"><img src="./../../Assets/yellowTick.png"></div><div class="col-9">Lack of behavioral and cultural fitment has been leading to extreme attrition.</div></div></li>'
    }
    document.getElementById("talent-problem").style.display = "none";
    document.getElementById("client-problem").style.textAlign = "left";
    document.getElementById("client-problem-listId").style.display = "block";
    document.getElementById("client-problem-details").innerHTML = data;
    document.getElementById("client-problem-details").style.marginLeft ='25%';
    document.getElementById("hand-img").style.marginRight = "25%";
}