//CriticalAnimation
/*:
@plugindesc クリティカルヒット時にアニメーションを流すプラグインだよ～ん
@author TCX
@help ほにゃららほにゃほにゃらら
@param AnimationID
@desc クリティカルヒット時に流すアニメーションのIDなのである！
@default 0
*/


(function(){

var parameters = PluginManager.parameters('CriticalAnimation');
var AnimationID = Number(parameters['AnimationID']);

Sprite_Damage.prototype.setup = function(target) {
    var result = target.result();
    if (result.missed || result.evaded) {
        this.createMiss();
    } else if (result.hpAffected) {
        this.createDigits(0, result.hpDamage);
    } else if (target.isAlive() && result.mpDamage !== 0) {
        this.createDigits(2, result.mpDamage);
    }
    if (result.critical) {
	if(AnimationID != 0){
		target.startAnimation(AnimationID, false, 0);
	}
        this.setupCriticalEffect();
    }
};

})();
