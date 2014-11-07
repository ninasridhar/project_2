require "spec_helper"

describe Tag do
  describe "relations" do
    it{should have_and_belong_to_many(:photos)}
  end
end