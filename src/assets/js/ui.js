var Header = {
  init: function () {
    this.aside();
    this.header();
    
  },
  header: function (){
    $('#menuButton').on('click', function () {
      $('#menuListContainer').slideToggle(300);
      $('#dimOverlay').fadeToggle(300);
      $(this).toggleClass('open');

      // 메뉴 아이콘과 닫기 아이콘 전환
      if ($(this).hasClass('open')) {
        $('.menu-icon').hide();
        $('.close-icon').show();
      } else {
        $('.menu-icon').show();
        $('.close-icon').hide();
      }
    });

    $('#dimOverlay').on('click', function () {
      $('#menuListContainer').slideUp(300);
      $('#dimOverlay').fadeOut(300);
      $('#menuButton').removeClass('open');
      $('.menu-icon').show();
      $('.close-icon').hide();
    });
  },
  aside: function () {
    $(document).ready(function () {
      $(document).ready(function () {
        $('.dep1').on('click', function () {
          $(this).toggleClass('active');
          $(this).next('.dep2').slideToggle(300);
      
          // 다른 메뉴가 열리지 않도록 할 경우 주석 해제
          // $('.dep1').not(this).removeClass('active').next('.dep2').slideUp(300);
        });
        $('.dep2 > li > a').on('click', function (e) {
          e.preventDefault();
          const isOpen = $(this).next('.dep3').is(':visible');
          if (isOpen) {
              $(this).removeClass('active');
              $(this).next('.dep3').slideUp(300);
          } else {
              $(this).addClass('active');
              $(this).next('.dep3').slideDown(300);
          }
      });
      });
    });
  },
};

var Common = {
  init: function () {
    this.select();
    this.common();
    this.datepickerRun();
  },
  select: function () {
    $(document).ready(function () {
      // 드롭다운 열고 닫기
      $(".select-btn").click(function () {
        $(this).parent().toggleClass("show");
      });
    
      // 옵션 클릭 시 선택 처리
      $(".select-wrap .optionitem").click(function () {
        var text = $(this).text();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().siblings(".select-btn").find("span").text(text).css("color", "#333");
        $(".select-wrap").removeClass("show");
      });
    
      // 옵션 외부 클릭 시 드롭다운 닫기
      $(document).click(function (e) {
        if (!$(e.target).closest(".select-wrap").length) {
          $(".select-wrap").removeClass("show");
        }
      });
    });
  },
  datepickerRun: function () {
    // 일반 달력 Datepicker 설정
    $("[data-picker='date']").datepicker({
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      showOtherMonths: false,
      showMonthAfterYear: true,
      yearSuffix: "년",
      dateFormat: "yy-mm-dd",
    });

    $("#monthpicker").monthpicker({
      monthNames: ['1월(JAN)', '2월(FEB)', '3월(MAR)', '4월(APR)', '5월(MAY)', '6월(JUN)',
          '7월(JUL)', '8월(AUG)', '9월(SEP)', '10월(OCT)', '11월(NOV)', '12월(DEC)'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      showOn: "button",
      changeYear: false,
      yearRange: 'c-2:c+2',
      dateFormat: 'yy-mm'
    });
  },

  common: function () {
    // confirm 모달
    $(document).ready(function () {
      // 확인 버튼 클릭 시 다른 모달 표시
      $(".save-btn").click(function () {
        $("#alert-save-confirm").modal("hide"); 
        $("#alert-save").modal("show"); 
      });
      $('#togglePassword').on('click', function () {
        const type = $('#password').attr('type') === 'password' ? 'text' : 'password';
        $('#password').attr('type', type);
        
        if (type === 'password') {
            $('#togglePassword').attr('src', 'icon-eye.svg'); 
        } else {
            $('#togglePassword').attr('src', 'icon-eye-slash.svg'); 
        }
    });
    });


    $(document).ready(function () {
      $("#fileInput").on("change", function () {
        var selectedFiles = this.files;

        if (selectedFiles.length > 0) {
          $("#selectedFile").text(selectedFiles[0].name);
          $("#selectedFile").addClass("select");
        } else {
          $("#selectedFile").text("선택된 파일이 없습니다.");
        }
      });
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
          $(".top-btn").fadeIn(200);
        } else {
          $(".top-btn").fadeOut(200);
        }
      });

      $(".top-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
      });

      $('#starIcon').on('click', function () {
        const isActive = $(this).hasClass('active');
        const newSrc = isActive
          ? '../../assets/images/icon-star.svg'
          : '../../assets/images/icon-star-active.svg';
        $(this).attr('src', newSrc).toggleClass('active');
      });
    });
  },
};

Header.init();
Common.init();

