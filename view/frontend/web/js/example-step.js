define(
    [
        'ko',
        'uiComponent',
        'jquery',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function (ko,
              Component,
              $,
              _,
              stepNavigator) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Yireo_ExampleStepCheckout/example-step',
                form: {'exampleField': ''}
            },
            initialize: function () {
                this._super();
                this.form.exampleField = ko.observable('');
                stepNavigator.registerStep(
                    'example-step',
                    'example-step',
                    'Example Step',
                    this.isVisible,
                    _.bind(this.navigate, this),
                    15
                );
                return this;
            },
            isVisible: ko.observable(false),
            navigate: function () {
                console.log('Entering example step');
            },
            navigateToNextStep: function () {
                console.log('Value of example field: ' + this.form.exampleField());
                //$.post("/examplestepcheckout/ajax/post", { exampleField: this.form.exampleField() } );
                stepNavigator.next();
            }
        });
    }
);