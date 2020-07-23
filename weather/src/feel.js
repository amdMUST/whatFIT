import React from 'react'
//import App from './App';

class Feel extends React.Component {
    // i do not know what to do here  
    render () {
    return <div className='message-box'>
      Hello { this.props.name }
    </div>
  }
}

// because as an american, i only understand things in the imperial system lol
function convertFtoC( unit, temp ){
    return Math.round( (temp * (9/5)) + 32 );
}

// figure out what color the background should be based on size and temp
function getColor( size, unit, temp ){

    if( unit === 'celsius'){
        temp = convertFtoC(unit,temp);
    }

    if( size === 's' ){
        return getSmallFeel(temp,unit);
    }
    else if( size === 'm' ){
        return getMediumFeel(temp);
    }
    else{
        return getLargeFeel(temp);
    }
}


function getSmallFeel( temp ){

    if(temp<=59){
        return 'cold';
    }
    else if(temp<=69 && temp>=60){
        return 'meh';
    }
    else if(temp<=77 && temp>=70){
        return 'perfect';
    }
    else if(temp<=87 && temp>=78){
        return 'warm';
    }
    else if(temp>=88){
        return 'hot';
    }
}


function getMediumFeel( temp ){

    if(temp<=58){
        return 'cold';
    }
    else if(temp<=66 && temp>=59){
        return 'meh';
    }
    else if(temp<=78 && temp>=67){
        return 'perfect';
    }
    else if(temp<=87 && temp>=79){
        return 'warm';
    }
    else if(temp>=88){
        return 'hot';
    }
}


function getLargeFeel( temp ){

    if(temp<=55){
        return 'cold';
    }
    else if(temp<=65 && temp>=56){
        return 'meh';
    }
    else if(temp<=82 && temp>=66){
        return 'perfect';
    }
    else if(temp<=88 && temp>=83){
        return 'warm';
    }
    else if(temp>=89){
        return 'hot';
    }
}

// main function to get back the clothing tips, based on weather and feel
function getResponse( size, unit, temp, weather ){

    var feeling = getColor( size, unit, temp );

    if( feeling === 'cold' ){
        return getColdResponse( weather );
    }
    else if( feeling === 'meh' ){
        return getMehResponse( weather );
    }
    else if( feeling === 'perfect' ){
        return getPerfectResponse( weather );
    }
    else if( feeling === 'warm' ){
        return getWarmResponse( weather );
    }else{
        return getHotResponse( weather );
    }

}

// these are gonna be the response based on the weather
function getColdResponse( weather ){
    switch( weather ){
        case 'Clear':
            return 'You should wear a jacket or coat!';
        case 'Clouds': 
            return 'You should wear a jacket and carry an umbrella with you!';
        case 'Rain':
            return 'You should wear a rainjacket, sweater, and probably bring an umbrella! \nMaybe add some boots for aesthetic too.';
        case 'Thunderstorm':
            return 'You should wear a rainjacket, sweater, and bring an umbrella! \nOh and also some rainboots would be nice.';
        case 'Snow':
            return 'You should stay home. But if you need to leave then wear ALOT of layers and some Boots!';
        default:
            return 'Yea wear a jacket and some shoes!';
    }
}

function getMehResponse( weather ){
    switch( weather ){
        case 'Clear':
            return 'Its meh outside right now, like maybe a long sleeve or pants would be good!';
        case 'Clouds': 
            return 'Its meh outside right now, like maybe a long sleeve or pants would be good. \nRemember to keep an umbrella on you though!';
        case 'Rain':
            return 'Its meh outside. You should wear a rainjacket and some type of pants, I recommend some corduroys!';
        case 'Thunderstorm':
            return 'Its meh outside. You should wear a rainjacket and some boots, I recommend Dr.Martins!';
        case 'Snow':
            return 'Yea its meh but also like its snowing, so isnt that beautiful?';
        default:
            return 'Yea wear a jacket or coat with some shoes!';
    }
}

function getPerfectResponse( weather ){
    switch( weather ){
        case 'Clear':
            return 'It is perfect outside, wear LITERALLY anything you want. \nEnjoy your life (if you want)';
        case 'Clouds': 
            return 'It is perfect outside, wear whatever youre comfortable in. \nALSO bring an umbrella, or dont!';
        case 'Rain':
            return 'It feels great, but its raining so please bring an umbrella or rain jacket! \nlove mom<3';
        case 'Thunderstorm':
            return 'You should wear a rainjacket and an umbrella. It feels great outside!';
        case 'Snow':
            return 'Impossible! where do you live??'
        default:
            return 'Yea wear a shirt and some shoes, you should be fine!';
    }
}

function getWarmResponse( weather ){
    switch( weather ){
        case 'Clear':
            return 'Ooh its warm outside, You should wear something light. \nWatch for armpit stains, keep an AXE can on you.';
        case 'Clouds': 
            return 'Its warm and it might rain, wow. Wear something light and bring an umbrella or rain jacket.';
        case 'Rain':
            return 'You should wear a rainjacket but like also its so hot. Maybe just an umbrella? Its on you';
        case 'Thunderstorm':
            return 'Its warm and a storm is coming, I would just relax inside with the AC. \nBring a raincoat if you need to go somewhere';
        case 'Snow':
            return 'It cant be warm and snowing at the same time. Nice try corporate america!!';
        default:
            return 'Dont wear too many clothes, thats how you end up sweating through your whole shirt';
    }
}

function getHotResponse( weather ){
    switch( weather ){
        case 'Clear':
            return 'You should wear nothing, its so hot outside oh my god please dont go out there!';
        case 'Clouds': 
            return 'Wear as little as possible, its so hot. just remember to bring an umbrella with you incase it rains!';
        case 'Rain':
            return 'Yea you should wear as little as possible but also take a rain pancho and umbrella!';
        case 'Thunderstorm':
            return 'yea its super hot outside but also you might get hit by lightning so... maybe dont go outside';
        case 'Snow':
            return 'Yea impossible to be this hot and snow at the same time so maybe escape the snowglobe you are trapped in!';
        default:
            return 'Yea wear as little as possible, dont wear anything';
    }
}


export default Feel;
export { getColor, getResponse };