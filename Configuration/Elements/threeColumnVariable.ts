lib.gridelements {
  threeColumnVariable < .defaultGridSetup
  threeColumnVariable {
    wrap = <div class="row">|</div>
    columns {
      default {
        wrap {
          field = flexform_columns
          listNum = 1
          listNum.splitChar = /
          wrap = <div class="col-md-|">
        }
        wrap2 = |</div>
      }
      1 < .default
      1.wrap.listNum = 2
      2 < .default
      2.wrap.listNum = 0
    }
  }
}
tt_content.gridelements_pi1.20.10.setup.threeColumnVariable < lib.gridelements.threeColumnVariable