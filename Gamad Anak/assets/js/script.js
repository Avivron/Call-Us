// External JS: JS Helper Functions
// External JS: Dynamics JS

var btnOpen = select(".js-open");
var btnClose = select(".js-close");
var modal = select(".js-modal");
var modalChildren = modal.children;

function hideModal() {
  dynamics.animate(
    modal,
    {
      opacity: 0,
      translateY: 100,
    },
    {
      type: dynamics.spring,
      frequency: 50,
      friction: 600,
      duration: 1500,
    }
  );
}

function showModal() {
  // Define initial properties
  dynamics.css(modal, {
    opacity: 0,
    scale: 0.5,
  });

  // Animate to final properties
  dynamics.animate(
    modal,
    {
      opacity: 1,
      scale: 1,
    },
    {
      type: dynamics.spring,
      frequency: 300,
      friction: 400,
      duration: 1000,
    }
  );
}

function showBtn() {
  dynamics.css(btnOpen, {
    opacity: 0,
  });

  dynamics.animate(
    btnOpen,
    {
      opacity: 1,
    },
    {
      type: dynamics.spring,
      frequency: 300,
      friction: 400,
      duration: 800,
    }
  );
}

function showModalChildren() {
  // Animate each child individually
  for (var i = 0; i < modalChildren.length; i++) {
    var item = modalChildren[i];

    // Define initial properties
    dynamics.css(item, {
      opacity: 0,
      translateY: 30,
    });

    // Animate to final properties
    dynamics.animate(
      item,
      {
        opacity: 1,
        translateY: 0,
      },
      {
        type: dynamics.spring,
        frequency: 300,
        friction: 400,
        duration: 1000,
        delay: 100 + i * 40,
      }
    );
  }
}

function toggleClasses() {
  toggleClass(btnOpen, "is-active");
  toggleClass(modal, "is-active");
}

// Open nav when clicking sandwich button
btnOpen.addEventListener("click", function (e) {
  toggleClasses();
  showModal();
  showModalChildren();
});

// Open nav when clicking sandwich button
btnClose.addEventListener("click", function (e) {
  hideModal();
  dynamics.setTimeout(toggleClasses, 500);
  dynamics.setTimeout(showBtn, 500);
});

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null, // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function ($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function (value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});
