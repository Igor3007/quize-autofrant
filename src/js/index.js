import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import 'jquery.inputmask/dist/jquery.inputmask.bundle';

import cars from '../js/carObj';
import phoneCode from '../js/phoneCode';

import $ from 'jquery';
svgPolyfill();

$(document).ready(function () {
  
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

for(let key in phoneCode){
  $('[data-multitel="code"]').append('<option value="'+key+'">'+phoneCode[key].code+'</option>')
}

$('[data-multitel="code"]').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');

    var option1 = $this.children('option').eq(0).text();
    var value1 = $this.children('option').eq(0).val();

    $styledSelect.html('<span><span class="af-country af-country-'+value1+'"></span>'+option1+'</span>');
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect); 
  
    for (var i = 0; i < numberOfOptions; i++) {

        var option = $this.children('option').eq(i).text();
        var value = $this.children('option').eq(i).val();

        var html = '<li rel="'+value+'" ><span class="af-country af-country-'+value+'" ></span>'+option+'</li>';
        $list.append(html)
   
      }
  
    var $listItems = $list.children('li');
  
    $styledSelect.on('click', function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.on('click', function(e) {

        e.stopPropagation();

        var value = $(this).attr('rel') 
        $styledSelect.html('<span>'+$(this).html()+'</span>').removeClass('active');
        $this.val(value);
        $list.hide();

        $('[data-multitel="input"]').inputmask("option", {
          mask: phoneCode[value].mask,
        })

        $('[data-multitel="input"]').removeAttr('area-valid').val('').focus()

    });
  
    $(document).on('click', function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

/* ============================================================================== */
/* ============================================================================== */


$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="af-select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.html('<span>'+$this.children('option').eq(0).text()+'</span>');
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.on('click', function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();


    });
  
    $listItems.on('click', function(e) {
        e.stopPropagation();
        $styledSelect.html('<span>'+$(this).text()+'</span>').removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).on('click', function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

function updateSelect(elem, callback){

  var $this = elem, numberOfOptions = elem.children('option').length;
  var $list = $this.parent().find('.select-options')
  var $styledSelect = $this.parent().find('.select-styled');

  $list.empty()

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $listItems.on('click', function(e) {
    e.stopPropagation();
    $styledSelect.html('<span>'+$(this).text()+'</span>').removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();

    $list.children('li').removeClass('active')
    $(this).addClass('active')

    if(callback) callback($(this).attr('rel'))

  });

  $styledSelect.html('<span>'+$this.children('option').eq(0).text()+'</span>');


}

/* ============================================================================= */
/* ============================================================================= */

    //===========================

    function quiz (){
      
        this.block = '.quiz';
        this.container = '.afq-question__stage';
        this.item = '.afq-question__pane';
        this.dotsContainer = '.quiz__mark';

  
        this.countSlide = $(this.item).length;
        this.slideActive = 1;
  
        this.init = function(){
          this.changeStage()
          this.nav()
          this.renderDots(this.slideActive)
        }
  
        this.changeStage = function(){
          $('[data-quiz-count="current"]').text(this.slideActive)
          $('[data-quiz-count="total"]').text(this.countSlide)
        }
  
        this.cahngeSlide = function(index){

          var _this = this
  
          $(this.item).addClass('fadeleft')

          setTimeout(function(){
            $(_this.item).removeClass('fadeleft')
            $(_this.item).removeClass('active')
            activeSlide ();
          }, 500)

          function activeSlide (){
            $(_this.item).eq((index-1)).addClass('active')

          }

          
  
        
          this.changeStage()
          this.nav()
          this.renderDots(this.slideActive)
           
        }
  
        this.nextSlide = function(){
  
          if(this.slideActive < this.countSlide){
            this.slideActive = this.slideActive + 1;
            this.cahngeSlide(this.slideActive)
          }else{
            $('.af-quiz__question').removeClass('open')
            $('.af-quiz__form').addClass('open')
          }
  
           
        }
        this.prevSlide = function(){
          if(this.slideActive > 1){
            this.slideActive = this.slideActive - 1;
            this.cahngeSlide(this.slideActive)
          }
        }

        this.renderDots = function(activeSlide){

          $(this.dotsContainer).empty()

          for (let i = 1; i <= this.countSlide; i++){
            let active = (i <= activeSlide ? 'active': '');
            $(this.dotsContainer).append('<span class="'+active+'"></span>')
          }

        }

  
        this.nav = function(){
  
          // говно какоето
            if(this.slideActive == 1){
              $('[data-quiz-nav="prev"]').hide()
            }else{
              $('[data-quiz-nav="prev"]').show()
            }
    
            if(this.slideActive == this.countSlide){
               
               

            }else{
              $('[data-quiz-nav="next"]').show()
              
            }
        }
  
  
      }
  
      var hst = new quiz();
      hst.init()
  
      $('[data-quiz-nav="prev"]').on('click', function(event){ hst.prevSlide() })
      $('[data-quiz-nav="next"]').on('click', function(event){ hst.nextSlide() })

      

      /* =========================================== */

      $(document).on('click', '[data-quiz-nav="next"], [data-quiz-nav="prev"]', function(event){
        event.preventDefault()
      })

      
      /* =========================================== */

      $(document).on('click', '[data-quiz="open"]', function(event){
        $('.af-quiz').toggleClass('open')
        $('html').toggleClass('hidden')
      })
            
      /* =========================================== */

      $(document).on('click', '[data-quiz="close"]', function(event){
        $(this).parents('.af-quiz').removeClass('open')
        $('html').removeClass('hidden')
      })

      $('[data-multitel="input"]').inputmask({
        mask: '(999)999-99-99',
        showMaskOnHover: false,
        getemptymask: true,
        clearIncomplete: true,

        oncomplete: function(elem){
            elem.target.setAttribute('area-valid', 'true')
        },
        onincomplete: function(elem){
          elem.target.setAttribute('area-valid', 'false')
        },
        oncleared: function(elem){
            elem.target.removeAttribute('area-valid')
        },
        onKeyValidation: function(elem){
            console.log(elem)
        }
    });

      /* =========================================== */

      $(document).on('click', '[data-quiz="start"]', function (event) {

        $('.af-quiz__start').addClass('animate')
    
        setTimeout(function(){
            $('.af-quiz__start').hide()
            $('.af-quiz__question').addClass('open')
            
        }, 600)
    
      }) //click


      /* ========================================================================= */
      /* ========================================================================= */

      /* ========================================== */
        /* ========================================== */

        function brandModel (cars){

          this.containerBrand = '[data-select="brand"]';
          this.containerModel = '[data-select="model"]';
          this.selectBrand = '';
          this.selectModel = '';

          this.init = function(){
              this.renderBrand(cars)
              

          },

          this.change = function(){
              $('[data-input="brand"]').val(this.selectModel)
          },

          this.renderBrand = function(array){

              $(this.containerBrand).empty();
              $(this.containerBrand).append('<option value="0" >-Выберите-</option>')
 
              var item;

              for (item in array){
                  var elem = array[item];
                  $(this.containerBrand).append('<option value="'+item+'" >'+elem.brand+'</option>');
              }

              var _this = this;

              updateSelect($(_this.containerBrand), function(val){
                _this.setBrand(val)
                updateSelect($(_this.containerModel), false)
              })
          }

          this.renderModel = function(array, brand){

              $(this.containerModel).empty();
              $(this.containerModel).append('<option value="0" >-Выберите-</option>')

              let model = array[brand].model;
              let _this = this;

              model.forEach(function(item){
                  $(_this.containerModel).append('<option value="'+item+'" >'+item+'</option>');
              })

          }

          this.setBrand = function(value){
              this.renderModel(cars, value)
              this.selectBrand = cars[value].brand
          }

          this.setModel = function(value){
              this.selectModel = value
              this.change()
          }

      }

      const brandModelInstans = new brandModel(cars)
            brandModelInstans.init()

      $(document).on('change', '[data-select="brand"]',function(event){
          brandModelInstans.setBrand($(this).val())
      })

      $(document).on('change', '[data-select="model"]',function(event){
          brandModelInstans.setModel($(this).val())
      })



    
}); //ready

 