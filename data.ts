export type Status='LIVE'|'UPCOMING'|'FT';
export type Match={id:number;league:string;home:string;away:string;homeShort:string;awayShort:string;hs:number|null;as:number|null;status:Status;minute:string;time:string;possession:[number,number];shots:[number,number];onTarget:[number,number];events:{minute:string;description:string}[]};
export const leagues=['All','Brasileirão Série A','Premier League','Serie A','LaLiga','Ligue 1','Bundesliga','Champions League'];
// Fictional demo fixtures. Never present these as actual results.
export const matches:Match[]=[
{id:1,league:'Premier League',home:'Arsenal',away:'Liverpool',homeShort:'ARS',awayShort:'LIV',hs:2,as:1,status:'LIVE',minute:"67'",time:'Today',possession:[57,43],shots:[13,9],onTarget:[6,4],events:[{minute:"12'",description:'Goal · Arsenal'},{minute:"35'",description:'Goal · Liverpool'},{minute:"61'",description:'Goal · Arsenal'}]},
{id:2,league:'Brasileirão Série A',home:'Flamengo',away:'Palmeiras',homeShort:'FLA',awayShort:'PAL',hs:1,as:1,status:'LIVE',minute:"43'",time:'Today',possession:[51,49],shots:[8,7],onTarget:[3,3],events:[{minute:"18'",description:'Goal · Palmeiras'},{minute:"39'",description:'Goal · Flamengo'}]},
{id:3,league:'LaLiga',home:'Barcelona',away:'Real Madrid',homeShort:'BAR',awayShort:'RMA',hs:null,as:null,status:'UPCOMING',minute:'',time:'Tomorrow · 20:00',possession:[0,0],shots:[0,0],onTarget:[0,0],events:[]},
{id:4,league:'Bundesliga',home:'Bayern Munich',away:'Borussia Dortmund',homeShort:'BAY',awayShort:'BVB',hs:3,as:2,status:'FT',minute:'FT',time:'Yesterday',possession:[54,46],shots:[16,11],onTarget:[8,5],events:[{minute:"21'",description:'Goal · Bayern Munich'},{minute:"29'",description:'Goal · Borussia Dortmund'},{minute:"49'",description:'Goal · Bayern Munich'},{minute:"73'",description:'Goal · Borussia Dortmund'},{minute:"86'",description:'Goal · Bayern Munich'}]},
{id:5,league:'Serie A',home:'Inter',away:'Juventus',homeShort:'INT',awayShort:'JUV',hs:null,as:null,status:'UPCOMING',minute:'',time:'Sunday · 19:45',possession:[0,0],shots:[0,0],onTarget:[0,0],events:[]},
{id:6,league:'Ligue 1',home:'Paris Saint-Germain',away:'Marseille',homeShort:'PSG',awayShort:'MAR',hs:0,as:0,status:'LIVE',minute:"22'",time:'Today',possession:[63,37],shots:[5,2],onTarget:[1,0],events:[]},
{id:7,league:'Champions League',home:'Manchester City',away:'Real Madrid',homeShort:'MCI',awayShort:'RMA',hs:null,as:null,status:'UPCOMING',minute:'',time:'Wednesday · 21:00',possession:[0,0],shots:[0,0],onTarget:[0,0],events:[]}
];
