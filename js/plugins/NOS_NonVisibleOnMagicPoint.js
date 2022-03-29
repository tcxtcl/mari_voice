//=============================================================================
// NOS_NonVisibleOnMagicPoint.js
//=============================================================================

/*:ja
 * @plugindesc MPをすべての画面から非表示にする
 * @author Minon
 *
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 */
(function() {
	//<ポイント>
	//　「drawActorMp」というものがすべてコメントアウトされている事です
	//この「drawActorMp」というものは、「MP」を画面上に書き込むというものです。
	//「draw～」というものは、画面上に何かを書き込んでいるものなので注意してみているといいですよ♪

	Window_Base.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
	    var lineHeight = this.lineHeight();
	    var x2 = x + 180;
	    var width2 = Math.min(200, width - 180 - this.textPadding());
	    this.drawActorName(actor, x, y);
	    this.drawActorLevel(actor, x, y + lineHeight * 1);
	    this.drawActorIcons(actor, x, y + lineHeight * 2);
	    this.drawActorClass(actor, x2, y);
	    this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
	    //2016.08.31 Minon Del start...
//	    this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
	    //2016.08.31 Minon Del end  ...
	};

	Window_Status.prototype.drawBasicInfo = function(x, y) {
	    var lineHeight = this.lineHeight();
	    this.drawActorLevel(this._actor, x, y + lineHeight * 0);
	    this.drawActorIcons(this._actor, x, y + lineHeight * 1);
	    this.drawActorHp(this._actor, x, y + lineHeight * 2);
	    //2016.08.31 Minon Del start...
//	    this.drawActorMp(this._actor, x, y + lineHeight * 3);
	    //2016.08.31 Minon Del end  ...
	};
	Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
	    this.drawActorHp(actor, rect.x + 0, rect.y, 108);
	    //2016.08.31 Minon Del start...
//	    this.drawActorMp(actor, rect.x + 123, rect.y, 96);
	    //2016.08.31 Minon Del end  ...
	    this.drawActorTp(actor, rect.x + 234, rect.y, 96);
	};
	Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
	    this.drawActorHp(actor, rect.x + 0, rect.y, 201);
	    //2016.08.31 Minon Del start...
//	    this.drawActorMp(actor, rect.x + 216,  rect.y, 114);
	    //2016.08.31 Minon Del end  ...
	};

})();