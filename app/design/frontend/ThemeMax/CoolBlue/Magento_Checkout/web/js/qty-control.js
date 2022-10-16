/**
 * @author      Maxim <maxim.hladchuk@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

define(['jquery'],function($){
    'use strict';
    return function(){
        let productQty = $('.qty-controll-class').val();

        $('.btn-qty-minus').on('click', function () {
            productQty = $('.qty-controll-class').val();
            productQty = Number(productQty);
            productQty--;
            if (productQty < 1) {
                productQty = 1;
            }
            $('.qty-controll-class').val(productQty);
            $('.action.update').trigger('click');

        });
        $('.btn-qty-plus').on('click', function() {
            productQty = $('.qty-controll-class').val();
            productQty = Number(productQty);
            productQty++;
            $('.qty-controll-class').val(productQty);
            $('.action.update').trigger('click');
        });
    }
});
