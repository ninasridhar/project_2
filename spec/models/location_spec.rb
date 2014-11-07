require "spec_helper"

describe Location do
  describe "relations" do
    it{should have_many(:photos)}
  end
end