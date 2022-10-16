/**
 * @author      Maxim <maxim.hladchuk@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

define(['jquery'],function($){
    'use strict';
    return function(){
        $(window).scroll(
            function (){
                if(window.pageYOffset>1110){
                    $('.product_sticky').removeClass('unactive')
                }
                if(window.pageYOffset<1110){
                    $('.product_sticky').addClass('unactive')
                }
                // if(window.pageYOffset>3193){
                //     $('.product_sticky').addClass('unactive')
                // }
            })
    }
});
