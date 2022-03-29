 //=============================================================================
// Mano_BigEnemy.js
// ----------------------------------------------------------------------------
// Copyright (c) 2017-2017 Sigureya
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// [Twitter]: https://twitter.com/Sigureya/
// [github]:https://github.com/Sigureya/RPGmakerMV
// ----------------------------------------------------------------------------
//=============================================================================
/*:
 * 改造した場合、この後ろに「改変者（〇〇）」などの形で表記してください。
 * @author しぐれん
 * @plugindesc キャラクターごとに個別にアイテムを所持します。
 * @help
 * 大きい敵に対して<BigEnemy: 400 400>などと書いてください。
 * いい感じに位置が調整されます。
 * 
 * 更新履歴
 * 2018/02/26公開
 * */


(function(){
    'use strict'
const Sprite_Enemy_setBattler =Sprite_Enemy.prototype.setBattler;
const regExp= /(\d+) (\d+)/;

/**
 * @param {Game_Enemy} battler 
 */
Sprite_Enemy.prototype.setBattler =function(battler){
    Sprite_Enemy_setBattler.call(this,battler);
    const meta=  battler.enemy().meta;
//    const x =
    if(meta.BigEnemy){
        const match = regExp.exec(meta.BigEnemy);
        if(match){
            const x =Number(match[1]);
            const y = Number(match[2]);
            this.setHome(x,y);
        }

    }

};

})()
