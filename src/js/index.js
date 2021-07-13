import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import 'jquery.inputmask/dist/jquery.inputmask.bundle';

import $ from 'jquery';
svgPolyfill();

$(document).ready(function () {
  
/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

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
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.html('<span>'+$(this).text()+'</span>').removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

/* ======================================================= */

$(document).ready(function () {
   

    //===========================

    function quize (){
      
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
  
          $(this.item).removeClass('active')
          $(this.item).eq((index-1)).addClass('active')
  
        
          this.changeStage()
          this.nav()
          this.renderDots(this.slideActive)
           
        }
  
        this.nextSlide = function(){
  
          if(this.slideActive < this.countSlide){
            this.slideActive = this.slideActive + 1;
            this.cahngeSlide(this.slideActive)
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
              $('[data-quiz-nav="next"]').hide()
              $('[data-quiz="send"]').attr('style', 'display: flex')

            }else{
              $('[data-quiz-nav="next"]').show()
              $('[data-quiz="send"]').hide()
            }
        }
  
  
      }
  
      var hst = new quize();
      hst.init()
  
      $('[data-quiz-nav="prev"]').on('click', function(event){ hst.prevSlide() })
      $('[data-quiz-nav="next"]').on('click', function(event){ hst.nextSlide() })

      

      /* =========================================== */

      $(document).on('click', '[data-quiz-nav="next"], [data-quiz-nav="prev"]', function(event){
        event.preventDefault()
      })

      

      
      /* =========================================== */

      $(document).on('click', '[data-quiz="open"]', function(event){
        $('.quiz').toggleClass('open')
        $('html').toggleClass('hidden')
      })

            
      /* =========================================== */

      $(document).on('click', '.quiz__close', function(event){
        $(this).parents('.quiz').removeClass('open')
        $('html').removeClass('hidden')
      })
       

});
    
});