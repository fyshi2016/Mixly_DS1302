goog.require('Blockly.Blocks');

Blockly.Blocks.DS1302_init = {
    init: function() {
        this.setColour(20);
        this.appendValueInput("RST", Number)
            .appendTitle("时钟DS1302管脚：")
            .appendField("RST#")
            .setCheck(Number);
        this.appendValueInput("DAT")
            .appendField("DAT#")
            .setCheck(Number);
        this.appendValueInput("CLK")
            .appendField("CLK#")
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
}

Blockly.Blocks.DS1302_set_date = {
    init: function() {
        this.setColour(20);
        this.appendValueInput("YEAR", Number)
            .appendTitle("设置日期：")
            .appendField("年")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("MONTH")
            .appendField("月")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("DAY")
            .appendField("日")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("HOUR", Number)
            .appendField("时")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("MINUTE")
            .appendField("分")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.appendValueInput("SECOND")
            .appendField("秒")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Number);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
}

//时间-DS1307获取日期
Blockly.Blocks.DS1302_get_date = {
    init: function() {
        this.setColour(20);
        this.appendDummyInput("").appendField("获取时钟日期(格式:2017-1-1)");
        this.setInputsInline(true);
        this.setOutput(true, String);
    }
};

//时间-DS1307获取时间
Blockly.Blocks.DS1302_get_time = {
    init: function() {
        this.setColour(20);
        this.appendDummyInput("").appendField("获取时钟时间(格式:10:53:23)");
        this.setInputsInline(true);
        this.setOutput(true, String);
    }
};
