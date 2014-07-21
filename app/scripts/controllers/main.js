'use strict';

/**
 * @ngdoc function
 * @name exportPdfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exportPdfApp
 */
angular.module('exportPdfApp')

.controller('PdfCtrl', ['$scope', function($scope){

    $scope.downloadPdf = function() {
      console.log("downloading JSPDF2222....");
      var svgCircle = "<svg height=\"100\" width=\"100\"> <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />Sorry, your browser does not support inline SVG.  </svg> ";

      var svg1 = d3.select("#chart1 > svg")[0];
      console.log(svg1);


      var pdf = new jsPDF('p', 'pt', 'a4');

      pdf.text(20, 20, "Export svg to pdf");
      svgElementToPdf(svg1, pdf, {
          scale: 72/96, // this is the ratio of px to pt units
          removeInvalid: false // this removes elements that could not be translated to pdf from the source svg
      });
      pdf.save('svg.pdf'); // use output() to get the jsPDF buffer



    }  
  
}]);
