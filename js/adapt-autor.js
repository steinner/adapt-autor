define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const AutorView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.changeColorBlock();
    },

    changeColorBlock: function(){      
      this.$el[0].parentNode.parentNode.classList.add('gray-bg');
    }
  });

  const AutorModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('autor', {
    model: AutorModel,
    view: AutorView
  });

});
