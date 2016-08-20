require 'rails_helper'
require 'spec_helper'

describe Move do
  describe "creation" do
    it "should be valid" do
      quick_attack = FactoryGirl.build(:quick_attack)
      expect(quick_attack).to be_valid
    end
  end
  describe "relations" do
    it "has a physical type" do
      quick_attack = FactoryGirl.build(:quick_attack)
      expect(quick_attack.type.name).to eq("Physical")
    end
  end
end
