(function(){
  'use strict';
  var state={objective:'traffic',creative:'story',placement:'feed'};
  var creativeData={
    story:{name:'₱410k story',feed:'assets/story-feed.png',story:'assets/story-story.png',headline:'We repair 7 of 10 roofs',copy:'Three contractors said full re-roof. The fourth found the repair.',hypothesis:'A specific costly-mistake story will earn more qualified attention than a general service claim.'},
    taglish:{name:'Taglish pattern break',feed:'assets/taglish-feed.png',story:'assets/taglish-story.png',headline:'Ayusin muna, bago palitan',copy:'Bago ka pumayag sa ₱380,000 re-roof, read this first.',hypothesis:'A natural Taglish hook will stop more local homeowners without changing the underlying offer.'},
    washer:{name:'₱18 washer detail',feed:'assets/washer-feed.png',story:'assets/washer-story.png',headline:'The ₱18 part, the ₱25,000 bill',copy:'A rubber washer costs eighteen pesos. The ceiling it ruins does not.',hypothesis:'One named part and two contrasting prices will make the inspection value concrete.'},
    carousel:{name:'Six-signs carousel',feed:'assets/carousel-feed.png',story:'assets/carousel-story.png',headline:'Six signs it may be a repair',copy:'Most roofs condemned in Laguna have years left in them.',hypothesis:'A swipeable educational sequence will trade some reach for higher-intent landing-page visits.'}
  };
  var objectiveData={
    traffic:{label:'Estimated landing-page views',cost:'Cost / view',rate:1,primary:'views'},
    leads:{label:'Estimated qualified inquiries',cost:'Cost / inquiry',rate:.082,primary:'leads'},
    awareness:{label:'Estimated people reached',cost:'Cost / 1,000 reached',rate:1,primary:'reach'}
  };
  var audienceFactor={homeowners:1,property:.72,newbuild:.81};
  var creativeFactor={story:1,taglish:1.08,washer:1.14,carousel:.91};
  var placementFactor={feed:1,story:.88};
  var $=function(id){return document.getElementById(id)};
  function pesos(value){return '₱'+Math.round(value).toLocaleString('en-PH')}
  function integer(value){return Math.max(1,Math.round(value)).toLocaleString('en-PH')}

  function bindSegment(id,key){
    $(id).addEventListener('click',function(event){
      var button=event.target.closest('button[data-value]');if(!button)return;
      state[key]=button.dataset.value;
      Array.prototype.forEach.call($(id).querySelectorAll('button'),function(item){item.setAttribute('aria-pressed',String(item===button))});
      renderPreview();
    });
  }
  function renderPreview(){
    var item=creativeData[state.creative];
    $('creative-image').src=item[state.placement];
    $('ad-copy').textContent=item.copy;
    $('ad-headline').textContent=item.headline;
    $('hypothesis-copy').textContent=item.hypothesis;
    $('ad-shell').className='ad-shell '+state.placement;
    $('format-label').textContent=state.placement==='feed'?'Facebook / Instagram feed · 4:5':'Stories / Reels · 9:16';
  }
  function forecast(){
    var budget=Number($('budget').value),days=Number($('duration').value),audience=$('audience').value;
    var spend=budget*days;
    var reach=Math.round((spend/82)*1000*audienceFactor[audience]*placementFactor[state.placement]);
    var frequency=state.placement==='story'?1.42:1.68;
    var views=Math.round(reach*(state.placement==='story'?.0068:.0081)*creativeFactor[state.creative]);
    var objective=objectiveData[state.objective];
    var primary,cost,range;
    if(objective.primary==='views'){
      primary=views;cost=spend/Math.max(views,1);range=integer(primary*.78)+'–'+integer(primary*1.24)+' planning range';
    }else if(objective.primary==='leads'){
      primary=Math.max(1,Math.round(views*objective.rate*(audience==='property'?.74:1)));cost=spend/primary;range=integer(Math.max(1,primary*.65))+'–'+integer(primary*1.35)+' planning range';
    }else{
      primary=reach;cost=spend/(reach/1000);range=integer(primary*.84)+'–'+integer(primary*1.16)+' planning range';
    }
    $('primary-label').textContent=objective.label;
    $('cost-label').textContent=objective.cost;
    $('primary-value').textContent=integer(primary);
    $('primary-range').textContent=range;
    $('reach-value').textContent=integer(reach);
    $('cost-value').textContent=pesos(cost);
    $('frequency-value').textContent=frequency.toFixed(2)+'×';
    $('spend-value').textContent=pesos(spend);

    var selected=creativeData[state.creative].name;
    var allocations=[{name:selected,value:40},{name:'Alternate hook',value:35},{name:'Control creative',value:25}];
    $('allocation-list').innerHTML=allocations.map(function(item){return '<li><span>'+item.name+'</span><strong>'+item.value+'%</strong></li>'}).join('');
    var rec=budget<300?'Keep the test to two angles; this budget is too thin for four useful reads.':budget>=900?'Use the first 7 days as a learning phase, then move 20% toward the strongest qualified-visit signal.':'Hold creative and audience constant for 7 days before reallocating. Judge the click quality, not only the cheapest click.';
    $('recommendation-copy').textContent=rec;
    $('run-forecast').textContent='Forecast updated';
    setTimeout(function(){$('run-forecast').textContent='Run planning forecast'},900);
  }
  bindSegment('objective-control','objective');
  bindSegment('placement-control','placement');
  $('creative').addEventListener('change',function(){state.creative=this.value;renderPreview()});
  $('budget').addEventListener('input',function(){$('budget-output').value=pesos(this.value)});
  $('run-forecast').addEventListener('click',forecast);
  renderPreview();forecast();
})();
