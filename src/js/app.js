import $ from 'jquery'
import { add, substruct } from './math'

const item1Price = 400;
const item2Price = 600;
const coupon = 300;
const totalPrice = add(item1Price, item2Price);
const priceAfterApplyCoupon = substruct(totalPrice, coupon);

$('body').text(priceAfterApplyCoupon);
